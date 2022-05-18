import styled from 'styled-components';

export const Container = styled.ul`
    padding-inline-start: unset;
    list-style: none;
    display: flex;

    li {
        padding: 0 1.5rem;
    }

    a {
        color: inherit;
        text-decoration: none;
        font-weight: bold;
        text-underline-position: under !important;
    }

    a:hover {
        text-decoration: underline !important;
    }

    @media screen and (max-width: 1023px) {
        display: ${(props) => (props.modalVisible ? 'flex' : 'none')};
        flex-direction: column;
        li {
            font-size: 3rem;
            padding: 1rem 2rem;
        }
    }
`;
