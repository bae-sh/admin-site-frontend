import styled from 'styled-components';

export const Container = styled.div`
    @media screen and (max-width: 1023px) {
        &.modal-enter {
            transform: translateX(-100%);
        }
        &.modal-enter-active {
            transition: transform 600ms;
            transform: translateX(0);
        }
        &.modal-exit {
            transform: translateX(0);
        }
        &.modal-exit-active {
            transition: transform 600ms;
            transform: translateX(-100%);
        }

        /* display: ${(props) => (props.modalVisible ? 'block' : 'none')}; */
        max-width: 412px;
        margin: 0 auto;

        .modalNav {
            display: flex;
        }

        .modalHeader {
            min-height: 72px;
            border-bottom: 0.5px solid black;
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

    @media screen and (max-width: 767px) {
        max-width: 364px;
    }
`;
