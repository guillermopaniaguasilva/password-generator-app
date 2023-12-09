import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  margin: 0;
  padding: 18px;
  border: none;
  outline: none;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.veryDarkGrey};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  &:hover {
    background-color: ${({ theme }) => theme.colors.veryDarkGrey};
    color: ${({ theme }) => theme.colors.green};
    border: 2px solid ${({ theme }) => theme.colors.green};
  }
`;

export const Icon = styled.img`
  margin-left: 16px;
  width: 12px;
  height: 12px;
`;
