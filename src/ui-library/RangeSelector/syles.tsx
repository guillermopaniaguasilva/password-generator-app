import styled from 'styled-components';

export const StyledRangeInput = styled.div`
  .range-input {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    cursor: grab;
    outline: none;
    height: 6px;
    background: ${({ theme }) => theme.colors.veryDarkGrey};

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      height: 28px;
      width: 28px;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 50%;
      border: none;
      transition: 0.2s ease-in-out;
      position: relative;
      z-index: 1;
    }

    &::-moz-range-thumb {
      height: 28px;
      width: 28px;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 50%;
      border: none;
      transition: 0.2s ease-in-out;
      position: relative;
      z-index: 1;
    }

    &:hover::-webkit-slider-thumb {
      background-color: ${({ theme }) => theme.colors.black};
      border: 1px solid ${({ theme }) => theme.colors.green};
    }

    &:hover::-moz-range-thumb {
      background-color: ${({ theme }) => theme.colors.black};
      border: 1px solid ${({ theme }) => theme.colors.green};
    }
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: normal;
  margin: 0;
`;

export const LengthLabel = styled.label`
  color: ${({ theme }) => theme.colors.green};
  font-size: 24px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: normal;
  margin: 0;
`;
