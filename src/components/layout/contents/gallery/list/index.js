/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-case-declarations */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable indent */
import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../../images/logo/admin_logo.png';
import Paging from '../../../paging';
import * as Styled from '../../listStyled';
import { useGalleries, removeMarkdown } from '../../../../../api';

function GalleryList() {
    const [currentPage, setCurrentPage] = React.useState(0);
    const { status, data, error } = useGalleries(currentPage, 6);

    const renderByStatus = React.useCallback(() => {
        switch (status) {
            case 'loading':
                return <div>Loading...</div>;
            case 'error':
                if (error instanceof Error) {
                    return <div>Error: {error.message}</div>;
                }
                break;
            default:
                return (
                    <>
                        <Styled.FlexContainer>
                            {data.data.map((item) => {
                                const date = item.lastModifiedAt.split(/T|-|[.]/);
                                const mdRemovedContent = removeMarkdown(item.content);
                                return (
                                    <li className='item_card' key={item.id}>
                                        <div className='wrap_container'>
                                            <div className='contents_title'>
                                                <Link to={`/gallery/${item.id}`}>
                                                    {item.title.length > 10
                                                        ? `${item.title.substr(0, 10)}...`
                                                        : item.title}
                                                </Link>
                                            </div>
                                            <div className='contents_main'>
                                                {mdRemovedContent.length > 20
                                                    ? `${mdRemovedContent.substr(0, 20)}...`
                                                    : mdRemovedContent}
                                            </div>
                                            <div className='row_wrap'>
                                                <span>{`${date[0]}년 ${date[1]}월 ${date[2]}일 ${date[3]}`}</span>
                                                <span>{`작성자 ${item.authorName}`}</span>
                                            </div>
                                            {item.content.includes(
                                                'https://d260rb3auh0wa7.cloudfront.net/file/',
                                            ) ? (
                                                <img
                                                    className='item_img'
                                                    alt='image_alt'
                                                    src={item.content.substring(
                                                        item.content.indexOf(
                                                            'https://d260rb3auh0wa7.cloudfront.net/file/',
                                                        ),
                                                        item.content.indexOf(
                                                            ')',
                                                            item.content.indexOf(
                                                                'https://d260rb3auh0wa7.cloudfront.net/file/',
                                                            ),
                                                        ),
                                                    )}
                                                />
                                            ) : (
                                                <img
                                                    className='item_img'
                                                    alt='admin_logo'
                                                    src={Logo}
                                                />
                                            )}
                                        </div>
                                    </li>
                                );
                            })}
                        </Styled.FlexContainer>
                        <Paging
                            currentPage={currentPage + 1}
                            setCurrentPage={setCurrentPage}
                            totalCount={data.pageInfo.totalElements}
                            pageSize={data.pageInfo.pageSize}
                        />
                    </>
                );
        }
    }, [status, data]);

    return <div>{renderByStatus()}</div>;
}

export default GalleryList;
