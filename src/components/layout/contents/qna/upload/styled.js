import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;

    .submit_btn, .back_btn {
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

    .submit_btn:hover, .back_btn:hover {
        background: black;
        color: white;
    }
`;
