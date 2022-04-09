import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    height: 800px;
    margin-top: 100px;
`;
export const CalendarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    font-weight: 600;
`;

export const CalendarBody = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-top: 40px;
    font-weight: 400;
`;

export const Day = styled.span`
    text-align: center;
    margin-bottom: 5px;
`;

export const YearBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 767px) {
        font-size: 20px;
    }
`;

export const IconBox = styled.div`
    padding-top: 2px;
    margin: 0px 3px;
    cursor: pointer;
`;

export const HeaderLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        font-size: 40px;
    }
    span {
        margin-left: 10px;
        padding-top: 5px;
    }
    @media screen and (max-width: 767px) {
        font-size: 18px;
        svg {
            font-size: 35px;
        }
        span {
            margin-left: 4px;
        }
    }
`;

export const AddBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid lightgray;
    height: 30px;
    width: 90px;
    border-radius: 10px;
    cursor: pointer;
    svg {
        margin-right: 6px;
        height: 100%;
    }
`;

export const AddBox = styled.div`
    position: absolute;
    z-index: 1;
    background-color: white;
    width: 250px;
    height: 140px;
    margin-top: -40px;
    margin-left: 650px;
    border-radius: 16px;
    border: 1px solid lightgray;
    padding: 20px;
    opacity: 0.95;
    input {
        margin-left: 5px;
    }
    div {
        margin-top: 15px;
        margin-bottom: 15px;
    }
    button {
        background-color: white;
        border: 1px solid black;
        font-size: 14px;
        font-weight: 400;
        border-radius: 4px;
        width: 45px;
        margin-right: 10px;
        cursor: pointer;
    }
`;
