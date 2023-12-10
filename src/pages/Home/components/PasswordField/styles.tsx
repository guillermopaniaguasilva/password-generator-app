import styled from 'styled-components';

export const Password = styled.label<{
  isFilled: boolean;
}>`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: normal;
  opacity: ${({ isFilled }) => (isFilled ? '1' : '0.25')};
`;

export const Icon = styled.img`
  width: 21px;
  height: 24px;
  cursor: pointer;
`;

export const Copied = styled.label`
  color: ${({ theme }) => theme.colors.green};
  font-size: 18px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: normal;
  text-transform: uppercase;
  margin-right: 16px;
`;
