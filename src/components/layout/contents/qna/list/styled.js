import styled from 'styled-components';

export const Container = styled.div``;

export const FlexContainer = styled.ul`
    .item_card {
        transition: all 0.3s;
        text-align: center;
        justify-content: center;
        margin: 0 15px;
        height: 8rem;
        border-radius: 16px;
        border: 2px solid lightgray;
        margin-top: 36px;
        position: relative;
    }

    .item_card:hover {
        border: 1px solid lightgray;
        box-shadow: 3px 3px 3px 1px lightgray;
    }

    .wrap_container {
        width: 90%;
        display: inline-flex;
        margin: 30px;
    }

    .qna_content{
        text-align: left;
        flex-grow: 3;
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
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 15px;
        color: #83859c;
        flex-grow: 1;
    }

    @media screen and (max-width: 1023px) {
        .wrap_container{
            margin: 15px;
        }
        .item_card{
            height: 5rem;
        }
        .qna_title{
            font-size: 20px;
        }
        .qna_date{
            font-size: 7px;
            margin-top: 1rem;
        }
        .qna_author_name{
            font-size: 15px;
        }
    }

    @media screen and (max-width: 767px) {
        
    }
`;
