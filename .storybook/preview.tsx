import type { Preview } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import '../src/theme/main.scss';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
