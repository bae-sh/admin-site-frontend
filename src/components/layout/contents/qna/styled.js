import styled from 'styled-components';

export const Container = styled.div`
    .add_post {
        margin-top: 12px;
        margin-right: 12px;
    }

    .add_post .add_list {
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
    }

    .add_post .add_list li {
        margin-right: 20px;
        margin-bottom: 20px;
    }
    .add_post .add_list li .add_link {
        display: block;
        height: 44px;
        padding: 0 30px;
        border-radius: 15px;
        background: white;
        border: 1px solid lightgray;
        line-height: 44px;
        font-size: 20px;
        letter-spacing: -0.5px;
        font-weight: 500;
        &:hover {
            background: #dfdfdf;
        }
    }

    @media screen and (max-width: 1023px) {
        .add_post {
            margin-top: 8px;
        }

        .add_post .add_list li {
            margin-right: 15px;
        }

        .add_post .add_list .add_btn {
            margin-top: 0;
        }

        .add_post .add_list li .add_link {
            height: 37px;
            padding: 0 20px;
            font-size: 16px;
            line-height: 37px;
        }
    }
    @media screen and (max-width: 767px) {
        .add_post {
            margin-top: 6px;
        }

        .add_post .add_list li {
            margin-right: 10px;
        }

        .add_post .add_list .add_btn {
            margin-top: 0;
        }

        .add_post .add_list li .add_link {
            height: 30px;
            padding: 0 20px;
            font-size: 14px;
            line-height: 30px;
        }
    }
`;
