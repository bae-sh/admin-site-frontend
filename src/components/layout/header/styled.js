import styled from 'styled-components';

export const Container = styled.div`
    .innerHeader {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: white;
        border-bottom: 0.5px solid lightgray;
        min-height: 72px;
        max-width: 1296px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1;
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

    @media screen and (max-width: 1439px) {
        .innerHeader {
            max-width: 952px;
        }
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

        .headerNav {
            display: none;
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

export const Login = styled.span`
    border: 1px solid black;
    font-weight: 350;
    padding: 6px 12px;
    border-radius: 16px;
    &:hover {
        color: white;
        background-color: black;
    }
`;
