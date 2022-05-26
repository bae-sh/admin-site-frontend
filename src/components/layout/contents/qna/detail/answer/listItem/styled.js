import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    text-align: center;

    .answer_container {
        background-color: white;
        text-align: center;
        justify-content: center;
        border: 1px solid lightgray;
        border-radius: 16px;
        padding: 20px 30px 0 30px;
        margin-top: 36px;
    }

    .a_marker {
        color: yellowgreen;
        font-size: 60px;
        margin-right: 30px;
    }

    .wrap_container {
        width: 100%;
        border-bottom: solid 1px lightgray;
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
    }

    .detail_title_container {
        display: flex;
        margin-left: 10px;
    }

    .detail_title1 {
        text-align: left;
        font-weight: 700;
        font-size: 48px;
    }

    .detail_title2 {
        margin-top: 10px;
        text-align: left;
        font-size: 17px;
        font-weight: 500;
    }

    .detail_title2_author_infor {
        font-size: 24px;
    }

    .detail_title2_date_infor {
        font-size: 15px;
        font-weight: 400;
        color: #83859c;
    }

    .detail_content .content {
        font-size: 20px;
        margin: 200px 40px;
    }

    .btn_container {
        font-weight: 500;
        margin-right: 50px;
    }
    .modify_btn {
        margin-right: 10px;
    }

    .modify_btn,
    .delete_btn {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 30px;
        line-height: 40px;
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
    }

    .modify_btn:hover,
    .delete_btn:hover {
        text-underline-position: under;
        text-decoration: underline;
    }

    .download_file_btn_container {
        width: 100%;
        display: inline-block;
        padding-bottom: 10px;
        margin-top: 30px;
        text-align: left;
    }

    .download_file_btn {
        font-size: 15px;
        font-weight: 300;
        cursor: pointer;
    }

    .content {
        text-align: left;
    }
    .content p {
        font-size: 18px;
        font-weight: 400;
    }

    @media screen and (max-width: 1023px) {
        .a_marker {
            margin-right: 15px;
        }
        .detail_title1 {
            font-size: 35px;
        }
        .detail_title2 {
            margin: 15px 0 15px 0;
            font-size: 12px;
        }
        .detail_title2_author_infor {
            margin-right: 15px;
        }
        .modify_btn,
        .delete_btn {
            line-height: 30px;
            width: 50px;
            height: 30px;
            font-size: 13px;
        }
        .content {
            font-size: 12px;
        }
        .download_file_btn {
            font-size: 12px;
        }
    }
`;
