import type { Meta, StoryObj } from '@storybook/react-vite';

import Logo from './../component/Logo';

const meta = {
  component: Logo,
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const YellowLogo: Story = {
  args: {
    color: 'lightyellow',
    textColor: 'black',
    label: 'My Logo',
  },
};

export const BlueLogo: Story = {
  args: {
    color: 'lightblue',
    textColor: 'darkblue',
    label: 'My Logo',
  },
};
