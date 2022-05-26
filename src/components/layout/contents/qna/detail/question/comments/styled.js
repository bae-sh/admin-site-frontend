import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 15px;
    padding-bottom: 10px;
    padding: 10px;

    .wrap_container {
        width: 100%;
        overflow: auto;
        border-bottom: solid 0.7px lightgray;
        display: flex;
        justify-content: space-between;
    }

    .comment_title_container {
        margin: 10px 0 10px 0;
        text-align: left;
        font-size: 12px;
        font-weight: 500;
    }

    .comment_title_author_infor {
        font-size: 17px;
        font-weight: 700;
        margin-right: 30px;
    }

    .comment_title_date_infor {
        float: left;
        font-size: 14px;
        margin-bottom: 15px;
        color: #83859c;
    }

    .content {
        font-size: 17px;
        text-align: left;
        font-weight: 400;
        margin-bottom: 10px;
    }

    .btn_container {
        margin-top: 10px;
        font-weight: 500;
    }
    .modify_btn {
        margin-right: 10px;
    }

    .input_comment_modify {
        padding-top: 10px;
        outline: none;
        width: 100%;
        background-color: white;
        border: 0.5px solid gray;
        border-radius: 5px;
        text-align: left;
    }

    .comment_modify_btn,
    .comment_delete_btn,
    .comment_modify_upload_btn {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 30px;
        line-height: 40px;
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
        &:hover {
            text-underline-position: under;
            text-decoration: underline;
        }
    }

    .input_container {
        border-top: 1px solid lightgray;
        position: relative;
        padding-bottom: 50px;
    }
    .input_title {
        float: left;
        font-size: 20px;
        font-weight: 700;
        margin: 20px 0 20px 0;
    }
    .title_number {
        color: skyblue;
        margin-left: 10px;
    }

    .comment_upload_btn {
        margin-top: 5px;
        width: 100px;
        font-weight: 700;
        height: 30px;
        border-radius: 5px;
        border: 0;
        background: black;
        color: white;
        float: right;
        cursor: pointer;
        font-size: 17px;
    }

    .comment_upload_btn:hover {
        opacity: 0.7;
    }

    .input_comment {
        padding-top: 10px;
        outline: none;
        width: 100%;
        min-height: 100px;
        background-color: white;
        border: 0.5px solid gray;
        border-radius: 5px;
        text-align: left;
    }

    @media screen and (max-width: 1023px) {
        .comment_title_container {
            margin: 8px 0 8px 0;
            font-size: 9px;
        }
        .comment_title_author_infor {
            margin-right: 15px;
        }
        .btn_container {
            margin-top: 8px;
        }
        .modify_btn,
        .delete_btn,
        .modify_upload_btn {
            line-height: 30px;
            width: 50px;
            height: 30px;
            font-size: 11px;
        }
        .content {
            font-size: 12px;
        }
    }

    @media screen and (max-width: 767px) {
        .comment_title_container {
            flex-direction: column;
        }
        .comment_upload_btn {
            width: 70px;
            font-size: 12px;
            font-weight: 700;
        }
    }
`;
