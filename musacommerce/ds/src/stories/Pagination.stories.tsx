import type { Meta, StoryObj } from '@storybook/react';

import {
  Pagination
} from '../components/pagination';

const meta = {
  component: Pagination,
} satisfies Meta<typeof Pagination>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    links: [
      <a href='https://www.musaformazione.it'>1</a>,
      <a href='https://www.musaformazione.it'>2</a>,
      <a href='https://www.musaformazione.it'>3</a>,
      <a href='https://www.musaformazione.it'>4</a>,
      <a href='https://www.musaformazione.it'>5</a>,
      <a href='https://www.musaformazione.it'>6</a>,
      <a href='https://www.musaformazione.it'>7</a>,
      <a href='https://www.musaformazione.it'>8</a>,
      <a href='https://www.musaformazione.it'>9</a> ],
    selected: 2
  }
}
