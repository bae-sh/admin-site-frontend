import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    height: 800px;
    margin-top: 100px;
`;

export const HeaderLeft = styled.div`
    font-size: 30px;
    font-weight: 600;
    span {
        margin-left: 10px;
        padding-top: 5px;
    }
    @media screen and (max-width: 767px) {
        font-size: 18px;
        span {
            margin-left: 4px;
        }
    }
`;
export const SubHeader = styled.div`
    font-size: 25px;
    font-weight: 600;
    @media screen and (max-width: 767px) {
        font-size: 14px;
        span {
            margin-left: 4px;
        }
    }
`;

export const Body = styled.div`
    margin: 30px 10px;
    padding: 10px;
`;
export const Content = styled.div`
    border: 1px solid black;
    margin-top: 20px;
    height: 50vh;
    padding: 20px;
    overflow: scroll;
`;
export const ContentBox = styled.div`
    height: 40vh;
    overflow: scroll;
`;
export const ContentHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    font-size: 20px;
    font-weight: 400;
    padding: 10px 0px;
    margin-bottom: 10px;
    border-bottom: 1px solid lightgray;
`;

export const ModalTitle = styled.h1`
    font-size: 32px;
    font-weight: 400;
`;
export const ModalBody = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 60px;
    font-size: 24px;
    font-weight: 350;
    div {
        width: 70%;
        margin: 10px 0;
    }
`;
export const CloseBtn = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    font-size: 40px;
`;
export const PermissionBtn = styled.button`
    background-color: white;
    width: 60px;
    padding: 5px;
    border-radius: 4px;
    margin-right: 20px;
    border: 1px solid #111;
    cursor: pointer;
`;
