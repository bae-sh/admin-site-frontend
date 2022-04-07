/* eslint-disable no-case-declarations */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable indent */
/* eslint-disable consistent-return */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { useAnnouncementDetail } from '../../../../../api';

function AnnouncementDetailContent(id) {
    const navigate = useNavigate();
    const { status, data, error, isFetching } = useAnnouncementDetail(id);

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
                const date = data.data.lastModifiedAt.split(/T|-|[.]/);
                return (
                    <>
                        {console.log(data.data)}
                        <div className='detail_title'>
                            <div className='detail_title1'>{`${date[0]}년 ${date[1]}월 ${date[2]}일 ${date[3]} | ${data.data.authorName}`}</div>
                            <div className='detail_title2'>{data.data.title}</div>
                        </div>
                        <div className='detail_content'>
                            {data.data.image.map((item) => (
                                <img
                                    className='item_img'
                                    key={item.fileUrl}
                                    alt={item.fileName}
                                    src={item.fileUrl}
                                />
                            ))}
                            <div className='content'>{data.data.content}</div>
                            <span
                                className='back_btn'
                                aria-hidden='true'
                                onClick={() => {
                                    navigate(-1);
                                }}
                            >
                                목록 보기
                            </span>
                        </div>
                        {isFetching && <div>Background Updating...</div>}
                    </>
                );
        }
    }, [status, isFetching]);

    return <Styled.Container>{renderByStatus()}</Styled.Container>;
}

export default AnnouncementDetailContent;
