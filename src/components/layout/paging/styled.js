import styled from 'styled-components';

export const Paging = styled.ul`
    margin: 50px 0;

    .pagination {
        display: flex;
        justify-content: center;
    }
    li {
        display: inline-block;
        margin: 0 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul.pagination li a {
        text-decoration: none;
        color: gray;
        font-size: 1rem;
    }

    ul.pagination li.active a {
        color: black;
        font-weight: 700;
    }

    ul.pagination li a:hover,
    ul.pagination li a.active {
        font-weight: 600;
    }
`;
