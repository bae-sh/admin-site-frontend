import styled from 'styled-components';

export const Container = styled.div`
    padding: 72px 0 0 0;

    .title_main {
        font-size: 36px;
        font-weight: 700;
    }

    .title_description {
        letter-spacing: -2px;
        margin-top: 15px;
        font-size: 30px;
        font-weight: 400;
    }

    @media screen and (max-width: 1023px) {
        padding: 48px 0;

        .title_main {
            font-size: 30px;
        }

        .title_description {
            margin-top: 12px;
            font-size: 24px;
        }
    }
`;
