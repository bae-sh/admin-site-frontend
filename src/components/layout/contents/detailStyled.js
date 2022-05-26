import styled from 'styled-components';

export const Container = styled.section`
    margin: 30px 0;
    text-align: center;
    position: relative;

    .btn_container {
        position: absolute;
        top: 150px;
        right: 50px;
        font-size: 25px;
    }

    .delete_btn {
        margin-left: 20px;
    }

    .delete_btn,
    .modify_btn,
    .download_file_btn {
        cursor: pointer;
    }

    .delete_btn:hover,
    .modify_btn:hover,
    .download_file_btn:hover {
        text-decoration: underline;
        font-weight: 600;
    }

    .detail_title {
        margin-top: 50px;
        margin-bottom: 150px;
    }

    .detail_title1 {
        font-size: 17px;
        font-weight: 400;
        margin-bottom: 20px;
    }

    .detail_title2 {
        margin: 10px 0 40px 0;
        font-weight: 700;
        font-size: 48px;
    }

    .item_img {
        width: 100%;
        object-fit: cover;
        padding-top: 30px;
    }

    .detail_content .content {
        margin: 40px 10%;
        text-align: left;
        min-height: 400px;
    }

    .detail_content .content p {
        font-size: 20px;
    }

    .back_btn {
        display: inline-block;
        height: 54px;
        padding: 0 40px;
        border-radius: 30px;
        background: #eee;
        line-height: 54px;
        font-size: 20px;
        letter-spacing: -0.5px;
        margin-top: 40px;
        margin-bottom: 40px;
        font-weight: 700;
        cursor: pointer;
    }

    .back_btn:hover {
        background: #dfdfdf;
    }

    .content img {
        width: 100%;
    }

    .download_file_btn_container {
        display: flex;
        flex-direction: column;
        padding: 40px 0;
        margin: 0 10%;
        text-align: left;
    }

    @media screen and (max-width: 1023px) {
        margin: 24px 0;

        .detail_title {
            margin-top: 50px;
            margin-bottom: 70px;
        }

        .detail_title1 {
            font-size: 13px;
        }

        .detail_title2 {
            margin: 10px 0 30px 0;
            font-size: 32px;
        }

        .item_img {
            padding-top: 10px;
        }

        .detail_content .content {
            margin: 40px 8%;
        }

        .detail_content .content p {
            font-size: 15px;
        }

        .back_btn {
            height: 44px;
            padding: 0 30px;
            line-height: 44px;
            font-size: 15px;
            margin-bottom: 30px;
        }

        .btn_container {
            top: 100px;
            right: 20px;
            font-size: 16px;
        }

        .delete_btn {
            margin-left: 10px;
        }

        .download_file_btn {
            font-size: 14px;
        }

        .download_file_btn_container {
            padding: 30px 0;
            margin: 0 8%;
        }
    }

    @media screen and (max-width: 767px) {
        .btn_container {
            font-size: 12px;
        }
    }
`;
