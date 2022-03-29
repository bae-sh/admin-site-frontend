import styled from 'styled-components';

export const Container = styled.div`
    .innerHeader {
        border-bottom: 0.5px solid black;
        min-height: 72px;
        max-width: 952px;
        margin: 0 auto;
        display: ${(props) => (!props.modalVisible ? 'flex' : 'none')};
        justify-content: space-between;
        align-items: center;
    }

    .headerRight {
        margin: 0 3rem;
        cursor: pointer;
    }

    .headerLogo {
        margin-left: 2rem;
        width: 6rem;
    }

    .hamburger {
        display: none;
    }

    .headerHamburgerArea {
        display: none;
    }

    /* 412 */
    @media screen and (max-width: 1023px) {
        .innerHeader {
            max-width: 630px;
        }

        .headerRight {
            display: flex;
            flex-direction: row;
            margin: 0 1.5rem;
        }

        .headerLogo {
            margin-left: 1.5rem;
        }

        .hamburger,
        .user {
            margin-left: 1rem;
        }

        .hamburger {
            display: block;
        }
    }

    /* 364 */
    @media screen and (max-width: 767px) {
        .innerHeader {
            max-width: 364px;
        }

        .marginRight {
            margin: 0 1rem;
        }

        .headerLogo {
            margin-left: 1rem;
        }
    }
`;
