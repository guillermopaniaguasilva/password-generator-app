import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import StrengthIndicator from '.';

const StrengthIndicatorStory: React.FC = () => {
  const [strength, setStrength] = useState(0);

  return (
    <>
      <div style={{ width: '400px' }}>
        <StrengthIndicator strength={strength} />
      </div>
      <div className="d-flex mt-3 justify-content-between">
        <button
          onClick={() => {
            if (strength > 0 && strength <= 4) setStrength(strength - 1);
          }}
          className="btn btn-primary"
        >
          Decrease
        </button>
        <button
          onClick={() => {
            if (strength >= 0 && strength < 4) setStrength(strength + 1);
          }}
          className="btn btn-primary"
        >
          Increase
        </button>
      </div>
    </>
  );
};

const meta = {
  title: 'UI Library/Strength Indicator',
  component: StrengthIndicatorStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StrengthIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {};
