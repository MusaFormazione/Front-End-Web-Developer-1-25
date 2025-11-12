import type { Meta, StoryObj } from '@storybook/react';

import {
  Input
} from './../components/input';

const meta = {
  component: Input,
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof meta>;

export default meta;

export const BasicInput: Story = {
  args: {
    label: 'Username',
    status: 'normal',
    name: 'basic-input',
    type: 'text',
    helpText: 'Helper text for input',
    dimension: 'medium',
  },
};

export const ErrorInput: Story = {
  args: {
    label: 'Error',
    status: 'error',
    name: 'error-input',
    type: 'text',
    helpText: 'Helper text for input',
    dimension: 'medium',
  },
};



