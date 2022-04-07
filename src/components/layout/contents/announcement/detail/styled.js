import styled from 'styled-components';

export const Container = styled.section`
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

    .back_btn {
        display: inline-block;
        height: 54px;
        padding: 0 40px;
        border-radius: 30px;
        background: lightgray;
        line-height: 54px;
        font-size: 20px;
        letter-spacing: -0.5px;
        margin-bottom: 40px;
    }

    .back_btn:hover {
        background: black;
        color: white;
    }

    @media screen and (max-width: 1023px) {
        margin: 24px 0;

        .detail_title {
            margin-top: 50px;
        }

        .detail_title1 {
            font-size: 13px;
        }

        .detail_title2 {
            margin: 10px 0 30px 0;
            font-size: 32px;
        }

        .item_img {
            padding-top: 10px;
        }

        .detail_content .content {
            font-size: 15px;
            margin: 100px 15px;
        }

        .back_btn {
            height: 44px;
            padding: 0 30px;
            line-height: 44px;
            font-size: 15px;
            margin-bottom: 30px;
        }
    }
`;
