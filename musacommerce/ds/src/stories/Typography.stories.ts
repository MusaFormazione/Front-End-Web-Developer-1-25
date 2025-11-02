import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './../components/typography';

const meta = {
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;


type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    level: 1,
    text: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    level: 2,
    text: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    level: 3,
    text: 'Heading 3',
  },
};
