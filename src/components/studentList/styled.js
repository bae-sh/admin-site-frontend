import styled from 'styled-components';

export const ContentList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    font-size: 15px;
    font-weight: 350;
    padding: 10px;
`;
export const StudentInfoBtn = styled.button`
    border: 1px solid gray;
    border-radius: 6px;
    padding: 2px;
    width: 40px;
    cursor: pointer;
    background-color: white;
`;
