import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button from '.';
// @ts-ignore
import arrowIcon from '../../assets/images/icon-arrow-right.svg';

const meta = {
  title: 'UI Library/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OnlyWithText: Story = {
  args: {
    text: 'Button without icon',
    onClick: () => alert('This is a button without icon.'),
  },
};

export const WithIcon: Story = {
  args: {
    text: 'Button with icon',
    iconSrc: arrowIcon,
    iconAlt: 'arrow right',
    onClick: () => alert('This is a button with icon.'),
  },
};
