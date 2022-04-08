import React from 'react';
import Pagination from 'react-js-pagination';
import * as Styled from './styled';

function Paging(props) {
    const { currentPage, setCurrentPage, totalCount, pageSize } = props;

    return (
        <Styled.Paging>
            <Pagination
                activePage={currentPage}
                itemsCountPerPage={pageSize}
                totalItemsCount={totalCount}
                pageRangeDisplayed={5}
                prevPageText='<'
                nextPageText='>'
                onChange={(val) => setCurrentPage(val - 1)}
            />
        </Styled.Paging>
    );
}

export default Paging;
