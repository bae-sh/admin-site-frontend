import styled from 'styled-components';

export const Container = styled.section`
    .tab_list li {
        display: inline-block;
        margin-right: 15px;
    }

    .tab_list li .tab_link {
        display: block;
        height: 44px;
        padding: 0 20px;
        border-radius: 30px;
        background: lightgray;
        line-height: 44px;
        font-size: 16px;
        letter-spacing: -0.5px;
        border: none;
    }

    .tab_list li .clicked_tab {
        font-weight: 900;
        background: black;
        color: white;
    }

    .add_post {
        margin-top: 12px;
    }

    .add_post .add_list {
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
    }

    .add_post .add_list li {
        margin-right: 20px;
    }

    .add_post .add_list .add_btn {
        margin-top: 5px;
    }

    .add_post .add_list li .add_link {
        display: block;
        height: 44px;
        padding: 0 30px;
        border-radius: 30px;
        background: lightgray;
        line-height: 44px;
        font-size: 20px;
        letter-spacing: -0.5px;
    }

    @media screen and (max-width: 1023px) {
        .tab_list li {
            margin-right: 10px;
        }

        .tab_list li .tab_link {
            height: 37px;
            padding: 0 17px;
            font-size: 14px;
            line-height: 37px;
        }

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
`;
