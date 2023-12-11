import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  padding: 14px 16px;
  align-items: center;
`;

export const BarsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Bar = styled.div<{
  $shouldBeColored: boolean;
  $indicatorColor: string;
}>`
  width: 10px;
  height: 28px;
  background-color: ${({ theme, $indicatorColor, $shouldBeColored }) =>
    $shouldBeColored ? $indicatorColor : theme.colors.veryDarkGrey};
  border: ${({ theme, $shouldBeColored }) =>
    !$shouldBeColored && '2px solid' + theme.colors.white};
`;

export const StrengthLabel = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-size: 18px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: normal;
  margin-left: auto;
  margin-bottom: 0;
  margin-right: 16px;
`;

export const Label = styled.h4`
  color: ${({ theme }) => theme.colors.grey};
  text-transform: uppercase;
  font-size: 18px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: normal;
  margin-left: auto;
  margin: 0;
`;
