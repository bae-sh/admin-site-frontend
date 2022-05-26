import styled from 'styled-components';

export const Container = styled.div`
    margin: 50px 0;
    text-align: center;
    position: relative;

    .editor-container {
        width: 100%;
        border: solid 1px lightgray;
        border-radius: 16px;
        margin-top: 40px;
        padding: 30px;
    }

    .editor-title {
        margin: 30px 0 0 30px;
        text-align: left;
        font-size: 30px;
        font-weight: 700;
    }

    .a_marker {
        margin-right: 30px;
    }

    form {
        display: flex;
        flex-flow: column wrap;
        margin-top: 40px;
    }
    input {
        border: none;
    }

    input:focus {
        outline: none;
    }

    .title_input {
        border-bottom: 1.5px solid black;
        width: 74%;
        margin: 50px 13%;
        font-size: 35px;
    }

    .content_input {
        text-align: left;
        width: 90%;
        margin: 15px 5% 20px 5%;
        font-size: 20px;
        resize: none;
        padding: 10px;
        border-radius: 16px;
    }

    .file_input {
        margin-left: 12%;
    }

    .uploaded_file_container {
        margin: 15px 11% 0 11%;
    }

    .submit_btn {
        height: 44px;
        border-radius: 30px;
        line-height: 44px;
        font-size: 18px;
        letter-spacing: -0.5px;
        border: 1px solid black;
        width: 20%;
        margin: 0 20px;
        padding: 0;
        cursor: pointer;
        background: black;
        color: white;
    }

    .submit_btn:hover {
        opacity: 0.7;
    }

    .add_file_btn {
        height: 40px;
        border-radius: 30px;
        background: #eee;
        line-height: 40px;
        font-size: 20px;
        letter-spacing: -0.5px;
        border: none;
        width: 15%;
        margin: 0 6%;
        text-align: center;
        font-weight: 440;
        cursor: pointer;
    }

    .add_file_btn:hover {
        background: #dfdfdf;
    }

    .btn_container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 50px;
    }

    .back_btn {
        text-align: center;
        font-weight: 440;
    }

    .uploaded_file {
        font-size: 15px;
        display: flex;
        justify-content: space-between;
    }

    .uploaded_file svg {
        cursor: pointer;
        margin-left: 10px;
    }

    @media screen and (max-width: 1023px) {
        padding-top: 20px;
        margin-bottom: 40px;

        .editor-title {
            font-size: 20px;
        }

        .title_input {
            border-bottom: 1px solid black;
            width: 70%;
            margin: 30px 15%;
            font-size: 24px;
        }

        .content_input {
            margin: 7px 10% 50px 10%;
            font-size: 15px;
            padding: 8px;
            border-radius: 10px;
        }

        .back_btn,
        .submit_btn {
            height: 35px;
            line-height: 35px;
            font-size: 13px;
        }

        .add_file_btn {
            height: 32px;
            line-height: 32px;
            font-size: 16px;
            width: 17%;
        }
    }

    @media screen and (max-width: 767px) {
        .editor-title {
            font-size: 16px;
        }

        .content_input {
            margin: 0 10% 50px 10%;
        }

        .back_btn,
        .submit_btn {
            width: 15%;
            height: 27px;
            line-height: 27px;
            font-size: 10px;
        }

        .add_file_btn {
            height: 28px;
            line-height: 28px;
            font-size: 13px;
            width: 22%;
            margin: 0 12%;
        }
    }
`;
