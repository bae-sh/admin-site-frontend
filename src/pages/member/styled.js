import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    @media screen and (min-width: 1280px) {
        padding: 0 20vw;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 1px solid #000;
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
    .position {
        font-size: 1.3rem;
        font-weight: bold;
    }
    .name {
        font-size: 1.2rem;
        font-weight: 400;
    }
    background-color: white;
`;
