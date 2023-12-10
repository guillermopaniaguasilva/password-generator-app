import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import PasswordField from '.';
import theme from '../../../../theme';

const meta = {
  title: 'Password Generator App/Password Field',
  component: PasswordField,
  decorators: [
    (Story) => (
      <div
        className="d-flex flex-column justify-content-center align-items-center p-4"
        style={{
          height: '200px',
          width: '500px',
          background: theme.colors.veryDarkGrey,
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    password: 'P4$5W0rD!',
  },
};
