import styled from 'styled-components';

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 64px;
  margin-bottom: 16px;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.veryDarkGrey};
  padding: 18px 16px;
`;
