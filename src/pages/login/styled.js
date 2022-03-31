import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 1023px) {
        display: flex;
        flex-direction: column-reverse;
    }
`;
