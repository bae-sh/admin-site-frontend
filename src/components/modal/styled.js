import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;

    @media screen and (max-width: 1023px) {
        &.modal-enter {
            transform: translateX(150%);
        }
        &.modal-enter-active {
            transition: transform 600ms;
            transform: translateX(0%);
        }
        &.modal-exit {
            transform: translateX(0%);
        }
        &.modal-exit-active {
            transform: translateX(150%);
            transition: transform 600ms;
        }

        max-width: 412px;
        margin: 0 auto;

        .modalNav {
            display: flex;
        }

        .modalHeader {
            min-height: 72px;
            border-bottom: 0.5px solid lightgray;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .headerRight {
            cursor: pointer;
            display: flex;
            flex-direction: row;
            margin: 0 1.5rem;
        }

        .headerLogo {
            width: 6rem;
            margin-left: 1.5rem;
        }

        .modalBody {
            flex-direction: column;
            padding: 47px 0 66px 0;
            display: flex;
            height: calc(100vh - 72px);
        }
    }
    @media screen and (max-width: 1023px) {
        max-width: 630px;
    }
    @media screen and (max-width: 767px) {
        max-width: 364px;
        .headerLogo {
            margin-left: 1rem;
        }
    }
`;
