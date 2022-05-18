import styled from 'styled-components';

export const Container = styled.div``;

export const FlexContainer = styled.ul`
    border-bottom: 1px solid lightgray;
    .item_card {
        transition: all 0.1s;
        text-align: center;
        justify-content: center;
        height: 7rem;
        // border-radius: 16px;
        // border: 1px solid black;
        border-top: 1px solid lightgray;
        // margin-top: 15px;
        margin: 0 10px;
        position: relative;
    }

    .item_card:hover {
        // background: lightgray;
        color: lightgray;
        // box-shadow: 0px 5px 10px lightgray;
    }

    .wrap_container {
        width: 90%;
        display: inline-flex;
        margin: 30px;
        justify-content: space-between;
    }

    .qna_content {
        text-align: left;
        // flex-grow: 3;
    }

    .qna_title {
        margin-top: 0.2em;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 20px;
    }

    .qna_date {
        margin: 1.2em 0 0 0;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 15px;
        color: #83859c;
    }

    .qna_author_name {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 15px;
        color: #83859c;
        margin-top: 1em;
        float: right;
        // flex-grow: 1;
    }

    @media screen and (max-width: 1023px) {
        .wrap_container {
            margin: 15px;
        }
        .item_card {
            height: 5rem;
        }
        .qna_title {
            font-size: 20px;
        }
        .qna_date {
            font-size: 7px;
            margin-top: 1rem;
        }
        .qna_author_name {
            font-size: 15px;
        }
    }

    @media screen and (max-width: 767px) {
    }
`;
