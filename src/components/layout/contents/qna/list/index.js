import React, { useState, useEffect } from 'react';
import { useQueryClient, QueryClient } from 'react-query';
import { FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as Styled from './styled';
import { useQnAs } from '../../../../../api';

function QnaList() {
    const [currentPage, setCurrentPage] = useState(0);
    const { status, data, error } = useQnAs(6, currentPage);
    // console.log(data);

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
        </Styled.Container>
    );
}

export default QnaList;
