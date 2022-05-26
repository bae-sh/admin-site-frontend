import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    text-align: center;

    .q_marker {
        color: skyblue;
        margin-right: 30px;
        font-size: 60px;
    }

    .wrap_container {
        width: 100%;
        // border-bottom: solid 1px gray;
        display: flex;
        justify-content: space-between;
    }
    .detail_title_container {
        display: flex;
        justify-content: flex-start;
        text-align: left;
        font-weight: 700;
        font-size: 32px;
        margin-bottom: 30px;
    }
    .detail_title {
        vertical-align: center;
    }
    .detail_author {
        // margin: 0 0 20px 70px;
        text-align: left;
        font-size: 15px;
        font-weight: 400;
        color: #83859c;
    }

    .detail_title2_author_infor {
        margin-right: 30px;
    }

    .detail_title2_date_infor {
        color: #83859c;
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
        margin-top: 30px;
        margin-bottom: 20px;
        text-align: left;
    }

    .download_file_btn {
        font-size: 15px;
        font-weight: 400;
        // margin: 10px;
        cursor: pointer;
    }

    .questionContent {
        text-align: left;
        min-height: 100px;
    }
    .questionContent p {
        font-size: 18px;
        font-weight: 400;
    }

    @media screen and (max-width: 1023px) {
        .q_marker {
            font-size: 40px;
            margin-right: 15px;
        }
        .detail_title {
            font-size: 24px;
            margin-bottom: 10px;
        }
        .detail_author {
            font-size: 12px;
        }
        .questionContent p {
            font-size: 14px;
        }
        .btn_container {
            flex-direction: column;
        }
        .modify_btn,
        .delete_btn {
            line-height: 30px;
            width: 50px;
            height: 30px;
        }
        .modify_btn {
            margin-bottom: 10px;
        }
        .download_file_btn {
            font-size: 12px;
        }
    }

    @media screen and (max-width: 767px) {
        .q_marker {
            font-size: 30px;
            margin-right: 15px;
        }
        .detail_title {
            font-size: 24px;
            margin-bottom: 10px;
        }
        .detail_author {
            font-size: 12px;
            display: flex;
            flex-direction: column;
        }
        .modify_btn,
        .delete_btn {
            line-height: 30px;
            width: 35px;
            height: 30px;
        }
        .modify_btn {
            margin-right: 0px;
        }
    }
`;
