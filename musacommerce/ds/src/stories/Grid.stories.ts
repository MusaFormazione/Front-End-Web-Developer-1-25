import type { Meta, StoryObj } from '@storybook/react';

import { ColWrapper } from './ColWrapper.tsx';

const meta = {
  component: ColWrapper,
} satisfies Meta<typeof ColWrapper>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Col12: Story = {
  args: {
    cols: 12,
    children: 'Column spanning 12 columns',
    style: { backgroundColor: '#e0e0e0', padding: '10px' },
  },
};

export const Col6Offset3: Story = {
  args: {
    cols: 6,
    offset: 3,
    children: 'Column spanning 6 columns with an offset of 3',
    style: { backgroundColor: '#c0c0c0', padding: '10px' },
  },
};

export const Col4Offset4: Story = {
  args: {
    cols: 4,
    offset: 4,
    children: 'Column spanning 4 columns with an offset of 4',
    style: { backgroundColor: '#a0a0a0', padding: '10px' },
  },
};

export const Col3Offset0: Story = {
  args: {
    cols: 3,
    offset: 0,
    children: 'Column spanning 3 columns with no offset',
    style: { backgroundColor: '#808080', padding: '10px' },
  },
};
