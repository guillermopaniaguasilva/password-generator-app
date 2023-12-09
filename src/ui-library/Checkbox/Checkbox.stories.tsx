import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Checkbox from '.';
import theme from '../../theme';

const meta = {
  title: 'UI Library/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <div
        style={{
          width: '200px',
          height: '50px',
          backgroundColor: theme.colors.veryDarkGrey,
        }}
        className="d-flex align-items-center justify-content-center"
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
  },
};
