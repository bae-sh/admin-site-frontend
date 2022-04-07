import React from 'react';
import Pagination from 'react-js-pagination';
// import PropTypes from 'prop-types';
import * as Styled from './styled';

function Paging(props) {
    const {
        currentPage, setCurrentPage, totalCount, pageSize,
    } = props;

    return (
        <Styled.Paging>
            <Pagination
                activePage={currentPage}
                itemsCountPerPage={pageSize + 1}
                totalItemsCount={totalCount}
                pageRangeDisplayed={10}
                prevPageText='<'
                nextPageText='>'
                onChange={(val) => setCurrentPage(val - 1)}
            />
        </Styled.Paging>
    );
}

// Paging.propTypes = {
//     id: PropTypes.string.isRequired,
//     kind: PropTypes.string.isRequired,
// };

export default Paging;
