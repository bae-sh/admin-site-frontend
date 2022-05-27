import styled from 'styled-components';

export const Container = styled.div`
    width: calc(100% + 20 * 2);
    text-align: center;
    background-color: #f8f9fa;
    margin: 20px -30px 0 -30px;
    border-top: 1px solid lightgray;
    border-bottom-right-radius: 14px;
    border-bottom-left-radius: 14px;
    padding-bottom: 10px;

    .comments_container {
        padding: 0 30px 30px 30px;
    }
    .wrap_container {
        margin-bottom: 0;
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
        // margin-top: 10px;
        margin: 0;
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
        position: relative;
        margin-bottom: 20px;
    }
    .input_title {
        float: left;
        font-size: 20px;
        font-weight: 700;
        margin: 20px 0 20px 0;
    }
    .title_number {
        color: yellowgreen;
        margin-left: 10px;
    }

    .comment_upload_btn {
        margin-top: 5px;
        width: 100px;
        font-weight: 700;
        height: 40px;
        border-radius: 5px;
        border: 0;
        background: yellowgreen;
        color: white;
        float: right;
        cursor: pointer;
        font-size: 17px;
        margin-bottom: 20px;
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
            maigin: 0px;
        }
        .modify_btn,
        .delete_btn,
        .modify_upload_btn {
            line-height: 30px;
            width: 50px;
            height: 30px;
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
