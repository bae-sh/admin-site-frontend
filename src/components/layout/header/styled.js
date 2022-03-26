import styled from 'styled-components';

export const Container = styled.div`
  .inner {
    border-bottom: 0.5px solid black;
    min-height: 72px;
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .user {
    /* margin-left: 5rem; */
    /* margin-right: 2rem; */
    margin: 0 3.5rem;
  }

  .logo {
    margin-left: 2rem;
    width: 7rem;
  }
`;
