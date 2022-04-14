import styled from 'styled-components';

export const Container = styled.div`
    margin: 30px 0;
    border-radius: 16px;
    box-shadow: 0px 0px 15px lightgray;
    text-align: center;

    .detail_title {
        margin-top: 100px;
    }

    .detail_title1 {
        font-size: 17px;
    }

    .detail_title2 {
        margin: 10px 0 48px 0;
        font-weight: 700;
        font-size: 48px;
    }

    .item_img {
        width: 100%;
        object-fit: cover;
        padding-top: 30px;
    }

    .detail_content .content {
        font-size: 20px;
        margin: 200px 40px;
    }
`;
