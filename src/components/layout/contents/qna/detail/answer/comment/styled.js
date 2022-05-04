import styled from 'styled-components';

export const Container = styled.div`
    width: calc(100% + 20*2);
    text-align: center;
    background-color: #f8f9fa;
    margin: 20px -20px 0 -20px;
    border-bottom-right-radius: 14px;
    border-bottom-left-radius: 14px;
    padding-bottom: 10px;

    .wrap_container {
        width: 100%;
        height: 60px;
        border-top: solid 0.7px gray;
        border-bottom: solid 0.7px gray;
        margin-bottom: 30px;
        display: inline-flex;
    }
    .comment_container {
        flex-grow: 3;
    }

    .comment_title_container {
        margin: 10px 0 10px 0;
        text-align: left;
        font-size: 12px;
        font-weight: 500;
    }

    .comment_title_author_infor {
        margin-right: 30px;
    }

    .comment_title_date_infor {
        color: #83859c;
    }

    .content {
        margin-left: 10px;
        font-size: 15px;
        text-align: left;
        font-weight: 600;
    }

    .btn_container {
        margin-top: 10px;
        font-weight: 500;
        flex-grow: 1;
    }
    .modify_btn {
        margin-right: 10px;
    }

    .modify_btn,
    .delete_btn,
    .comment_upload_btn {
        display: inline-block;
        width: 60px;
        height: 40px;
        border-radius: 30px;
        background: lightgray;
        line-height: 40px;
        font-size: 20px;
        font-weight: 400;
        cursor: pointer;
    }

    .modify_btn:hover,
    .delete_btn:hover,
    .comment_upload_btn:hover {
        background: black;
        color: white;
    }

    .input_container{
        position: relative;
        margin-bottom: 10px;
    }

    .input_title{
        font-size: 14px;
        font-weight: 700;
        text-align: left;
        margin-bottom: 10px;
        margin-left: 10px;
    }

    .input_comment{
        width: 80%;
        height: 40px;
        background-color: white;
        border: 1px solid #83859c;
        text-align: left;
        margin-right: 10px;
    }

    @media screen and (max-width: 1023px) {
        .comment_title_container {
            margin: 8px 0 8px 0;
            font-size: 9px;
        }
        .comment_title_author_infor {
            margin-right: 15px;
        }
        .btn_container{
            margin-top: 8px;
        }
        .modify_btn,
        .delete_btn,
        .comment_upload_btn {
            line-height: 30px;
            width: 50px;
            height: 30px;
            font-size: 11px;
        }
        .content{
            font-size: 12px;
        }
    }

    @media screen and (max-width: 767px) {
        .comment_title_container {
            flex-direction: column;
        }
    }`;
