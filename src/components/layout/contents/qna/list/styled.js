import styled from 'styled-components';

export const Container = styled.div``;

export const FlexContainer = styled.ul`
    .item_card {
        text-align: center;
        justify-content: center;
        margin: 0 15px;
        height: 8rem;
        border-radius: 16px;
        box-shadow: 0px 0px 15px lightgray;
        margin-top: 36px;
        flex: 1 1 30%;
        position: relative;
    }

    .item_card:hover {
        box-shadow: 0px 0px 15px gray;
    }

    .wrap_container {
        width: 90%;
        display: inline-flex;
        margin: 30px;
    }

    .qna_content{
        width: 80%;
        text-align: left;
    }

    .qna_title {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 20px;
    }

    .qna_date {
        margin: 2rem 0 0 0;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 15px;
        color: #83859c;
    }

    .qna_author_name {
        padding: 28px 0 0 50px;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 15px;
        color: #83859c;
    }
`;
