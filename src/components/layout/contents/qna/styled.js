import styled from 'styled-components';

export const Container = styled.div`
    .add_list {
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
    }

    .add_list li {
        margin-right: 20px;
    }

    .add_list .add_btn {
        margin-top: 5px;
    }

    .add_list li .add_link {
        display: block;
        height: 44px;
        padding: 0 30px;
        border-radius: 30px;
        background: lightgray;
        line-height: 44px;
        font-size: 20px;
        letter-spacing: -0.5px;
    }
`;
