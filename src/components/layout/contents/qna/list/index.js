import React from 'react';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { qnasPageState } from '../../../../../atoms';
import * as Styled from './styled';
import Paging from '../../../paging';
import { useQnAs } from '../../../../../api';

function QnaList() {
    const [currentPage, setCurrentPage] = useRecoilState(qnasPageState);
    const { status, data, error } = useQnAs(7, currentPage);

    const render = React.useCallback(() => {
        if (status === 'loading') {
            return <span>Loading...</span>;
        }

        if (status === 'error') {
            return (
                <span>
                    Error:
                    {error.message}
                </span>
            );
        }

        return (
            <Styled.Container>
                <Styled.FlexContainer>
                    {data.data.map((item) => {
                        const date = item.lastModifiedAt.split(/T|-|[.]/);
                        return (
                            <Link to={`/qna/${item.id}`} key={item.id}>
                                <li className='item_card'>
                                    <div className='wrap_container'>
                                        <div className='qna_content'>
                                            <div className='qna_title'>{item.title}</div>
                                            <div className='qna_date'>{`${date[0]}년 ${date[1]}월 ${date[2]}일 ${date[3]}`}</div>
                                        </div>
                                        <div className='qna_author_name'>{item.authorName}</div>
                                    </div>
                                </li>
                            </Link>
                        );
                    })}
                </Styled.FlexContainer>
                <Paging
                    currentPage={currentPage + 1}
                    setCurrentPage={setCurrentPage}
                    totalCount={data.pageInfo.totalElements}
                    pageSize={data.pageInfo.pageSize}
                />
            </Styled.Container>
        );
    }, [status, data]);

    return <>{render()}</>;
}

export default QnaList;
