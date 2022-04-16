import styled from 'styled-components';

export const DayBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    padding: 12px;
    border: 1px dashed #e8e8e8;
    border-collapse: separate;
    color: ${(props) => (props.prev ? 'lightgray' : '#6e6e6e')};
    font-size: 13px;
    overflow: hidden;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
    .day {
        align-self: flex-start;
        margin-bottom: 6px;
    }
    .toDo {
        color: ${(props) => (props.prev ? 'lightgray' : 'black')};
        width: 100%;
        font-weight: 500;
        margin-bottom: 2px;
        @media screen and (max-width: 1023px) {
            font-size: 11px;
        }
        @media screen and (max-width: 767px) {
            width: 250%;
            font-size: 10px;
            -webkit-transform: scale(0.8);
        }
    }
`;
