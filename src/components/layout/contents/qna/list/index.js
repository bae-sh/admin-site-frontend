import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styled';
import Paging from '../../../paging';
import { useQnAs } from '../../../../../api';

function QnaList() {
    const [currentPage, setCurrentPage] = useState(0);
    const { status, data, error } = useQnAs(5, currentPage);

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
                                    <div className='qna_content'>
                                        <div className='qna_title'>{item.title}</div>
                                        <div className='qna_date'>{`${date[0]}년 ${date[1]}월 ${date[2]}일 ${date[3]}`}</div>
                                    </div>
                                    <div className='qna_author_name'>{item.authorName}</div>
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
