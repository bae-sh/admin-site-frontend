import styled from 'styled-components';

export const Container = styled.div``;

export const FlexContainer = styled.ul`
    .item_card {
        width: 100%;
        //높이 반응형 요구
        height: 65px;
        display: inline-flex;
        background: #ffffff;
        border: 0.846575px solid #edeef2;
        box-sizing: border-box;
        border-radius: 13.5452px;
        box-shadow: 0 1px 1px gray;
    }

    .qna_type {
        width: 60px;
        height: 40px;
        justify-content: center;
        text-align: center;
        border: solid 2px;
        border-radius: 6px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: -0.006em;
    }
    .qna_type span{
        margin: auto;
        text-align: center;
    }

    .qna_title {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: 0.0846575px;
    }

    .qna_date {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 15px;
        letter-spacing: 0.169315px;
        color: #83859c;
    }

    .qna_viewNum {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 15px;
        letter-spacing: 0.169315px;
    }

    .qna_author_name {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 15px;
        letter-spacing: 0.169315px;
        color: #83859c;
        float: right;
    }
`;
