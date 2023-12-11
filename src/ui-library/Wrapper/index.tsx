import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: calc(100% - 32px);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 736px;
    margin: auto;
    padding: 0 48px;
  }
`;

export default Wrapper;
