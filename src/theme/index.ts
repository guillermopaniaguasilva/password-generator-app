import { DefaultTheme } from 'styled-components';

const breakpoints = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
};

const colors = {
  veryDarkGrey: '#24232C',
  grey: '#817D92',
  white: '#E6E5EA',
  black: '#18171F',
  green: '#A4FFAF',
  red: '#F64A4A',
  orange: '#FB7C58',
  yellow: '#F8CD65',
};

const fontSizes = {
  headingL: '64px',
  headingM: '24px',
  headingS: '20px',
  bodyM: '18px',
  bodyS: '14px',
};

const fontLineHeights = {
  headingL: '77px',
  headingM: '29px',
  headingS: '24px',
  bodyM: '24px',
  bodyS: '17px',
};

const fontWeights = {
  extraLight: 300,
  light: 400,
  normal: 500,
  bold: 700,
};

const fontFamilies = {
  main: 'JetBrains Mono',
};

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    colors: {
      veryDarkGrey: string;
      grey: string;
      white: string;
      black: string;
      green: string;
      red: string;
      orange: string;
      yellow: string;
    };
    fontSizes: {
      headingL: string;
      headingM: string;
      headingS: string;
      bodyM: string;
      bodyS: string;
    };
    fontWeights: {
      extraLight: number;
      light: number;
      normal: number;
      bold: number;
    };
    fontLineHeights: {
      headingL: string;
      headingM: string;
      headingS: string;
      bodyM: string;
      bodyS: string;
    };
    fontFamilies: {
      main: string;
    };
  }
}

const theme: DefaultTheme = {
  breakpoints,
  colors,
  fontSizes,
  fontLineHeights,
  fontWeights,
  fontFamilies,
};

export default theme;
