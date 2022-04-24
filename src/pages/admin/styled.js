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
