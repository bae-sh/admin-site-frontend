import styled from 'styled-components';

export const Container = styled.div`
    .Footer {
        bottom: 0;
        left: 0;
        right: 0;
        background: white;
        border-top: 0.5px solid lightgray;
        min-height: 300px;
        max-width: 1296px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1;
    }

    @media screen and (max-width: 1439px) {
        .Footer {
            max-width: 952px;
        }
    }

    @media screen and (max-width: 1023px) {
        .Footer {
            max-width: 630px;
        }
    }

    @media screen and (max-width: 767px) {
        .Footer {
            max-width: 364px;
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
