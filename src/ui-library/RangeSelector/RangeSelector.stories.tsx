import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import RangeSelector from '.';
import theme from '../../theme';

const RangeSelectorStory: React.FC = () => {
  const [charLength, setCharLength] = useState(10);

  return (
    <div
      style={{
        width: '400px',
        backgroundColor: theme.colors.veryDarkGrey,
        padding: '8px',
      }}
    >
      <RangeSelector charLength={charLength} setCharLength={setCharLength} />
    </div>
  );
};

const meta = {
  title: 'UI Library/Range Selector',
  component: RangeSelectorStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RangeSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
