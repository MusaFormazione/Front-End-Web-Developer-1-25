import type { Meta, StoryObj } from '@storybook/react';

import {
  Button
} from './../components/button';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export default meta;

export const ButtonPrimary: Story = {
  args: {
    label: 'Button Primary',
    variant: "primary",
    disabled: false
  },
};

export const ButtonSecondary: Story = {
  args: {
    label: 'Button Secondary',
    variant: "secondary",
    disabled: false
  },
};
