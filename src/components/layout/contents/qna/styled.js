import styled from 'styled-components';

export const Container = styled.div`
    .btn_container{
        text-align: right;
    }

    .add_btn {
        display: inline-block;
        height: 54px;
        padding: 0 40px;
        border-radius: 30px;
        background: lightgray;
        line-height: 54px;
        font-size: 20px;
        letter-spacing: -0.5px;
        margin: 0 0 40px 40px;
        font-weight: 400;
    }

    .add_btn:hover {
        background: black;
        color: white;
    }
`;
