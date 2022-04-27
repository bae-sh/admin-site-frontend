import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    text-align: center;

    .answer_container{
        background-color: white;
        text-align: center;
        justify-content: center;
        margin: 0 15px;
        border-radius: 16px;
        box-shadow: 0px 0px 15px lightgray;
        margin-top: 36px;
    }

    .a_marker {
        color: yellowgreen;
        margin-right: 30px;
    }

    .detail_title_container {
        border-bottom: solid 1px gray;
        margin-bottom: 30px;
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
    }

    .modify_btn:hover,
    .delete_btn:hover {
        background: black;
        color: white;
    }
`;
