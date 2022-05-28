import styled from 'styled-components';

export const FlexContainer = styled.ul`
    padding-top: 42px;

    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;

    .item_card {
        transition: all 0.3s;
        margin: 0 15px;
        height: 30rem;
        border-radius: 16px;
        box-shadow: 0px 10px 30px lightgray;
        margin-top: 36px;
        flex: 1 1 30%;
        position: relative;
    }

    .item_card:hover {
        animation: postHover 0.3s;
        animation-fill-mode: forwards;
        box-shadow: 0px 15px 30px gray;
    }

    @keyframes postHover {
        0% {
            transform: translateY(0%);
        }
        100% {
            transform: translateY(-2%);
        }
    }

    .wrap_container {
        height: 100%;
        display: flex;
        flex-flow: column wrap;
        margin: 30px 22px 0 22px;
    }

    .item_img {
        position: absolute;
        width: 100%;
        height: 18rem;
        object-fit: cover;
        bottom: 0;
        left: 0;
        border-radius: 0 0 16px 16px;
        padding-top: 10px;
    }

    .contents_title {
        font-weight: 700;
        font-size: 36px;
    }

    .contents_main {
        margin: 15px 0 35px 0;
        font-size: 20px;
    }

    .row_wrap {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        font-size: 16px;
    }
    @media screen and (max-width: 1439px) {
        .item_card {
            height: 22rem;
        }
        .item_img {
            height: 13rem;
        }
        .contents_title {
            font-weight: 700;
            font-size: 25px;
        }

        .contents_main {
            margin: 15px 0 25px 0;
            font-size: 16px;
        }

        .row_wrap {
            font-size: 12px;
        }
    }
    @media screen and (max-width: 1023px) {
        padding-top: 12px;

        .item_card {
            margin-top: 24px;
            flex: 1 1 40%;
        }
    }

    @media screen and (max-width: 767px) {
        .item_card {
            flex: 1 1 60%;
        }
    }
`;
