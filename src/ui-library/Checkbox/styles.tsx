import check from 'assets/images/icon-check.svg';
import styled from 'styled-components';

export const Box = styled.input`
  width: 20px;
  height: 20px;
  appearance: none;
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.veryDarkGrey};
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.colors.green};
    border: 2px solid ${({ theme }) => theme.colors.green};
  }

  &:before {
    content: url(${check});
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }

  &:checked:before {
    display: block;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.white};
  margin-left: 14px;
  cursor: pointer;
`;
