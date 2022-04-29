import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    text-align: center;

    .q_marker {
        color: skyblue;
        margin-right: 30px;
    }

    .wrap_container {
        width: 100%;
        border-bottom: solid 1px gray;
        margin-bottom: 30px;
        display: inline-flex;
    }
    .detail_title_container {
        flex-grow: 3;
    }

    .detail_title1 {
        text-align: left;
        font-weight: 700;
        font-size: 48px;
    }

    .detail_title2 {
        margin: 20px 0 20px 0;
        text-align: left;
        font-size: 17px;
        font-weight: 500;
    }

    .detail_title2_author_infor {
        margin-right: 30px;
    }

    .detail_title2_date_infor {
        color: #83859c;
    }

    .item_img {
        width: 100%;
        object-fit: cover;
        padding-top: 30px;
    }

    .detail_content .content {
        font-size: 20px;
        margin: 200px 40px;
    }

    .btn_container {
        font-weight: 500;
        flex-grow: 1;
    }
    .modify_btn {
        margin-right: 10px;
    }

    .modify_btn,
    .delete_btn {
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
    .delete_btn:hover {
        background: black;
        color: white;
    }

    .download_file_btn_container {
        width: 100%;
        padding: 15px;
        display: inline-block;
        border-top: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
        margin-top: 30px;
        text-align: left;
    }

    .download_file_btn {
        font-size: 15px;
        font-weight: 400;
        border-bottom: 1px solid black;
        margin: 10px;
        cursor: pointer;
    }

    .content {
        text-align: left;
        /* 요기에 markdown 스타일 넣으면 된다 지우야 */
        h1,
        h2,
        h3 {
            font-weight: bold;
        }

        h1 {
            font-size: 24px;
        }

        h2 {
            font-size: 20px;
        }

        h3 {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 1023px) {
        .q_marker {
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
    }

    @media screen and (max-width: 767px) {
        .detail_title2{
            display: inline-block;
        }
    }
`;
