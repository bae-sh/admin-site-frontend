import styled from 'styled-components';

export const FlexContainer = styled.ul`
    padding-top: 42px;

    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;

    .item_card {
        margin: 0 15px;
        height: 22rem;
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
        height: 100%;
        display: flex;
        flex-flow: column wrap;
        margin: 30px 22px 0 22px;
    }

    .item_img {
        position: absolute;
        width: 100%;
        max-height: 11rem;
        object-fit: cover;
        bottom: 0;
        left: 0;
        border-radius: 16px;
        padding-top: 10px;
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
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        font-size: 12px;
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
