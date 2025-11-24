import type { Meta, StoryObj } from '@storybook/react';

import {
  Navbar
} from '../components/navbar';

import Musa from "./assets/musa.png"

const meta = {
  component: Navbar,
} satisfies Meta<typeof Navbar>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    title: "Prova navbar"
  },
};

export const WithMenu: Story = {
    args: {
    title: "Prova navbar",
    items: [
      { link: "www.musaformazione.it", text: "Musa"},
      { link: "www.musaformazione.it", text: "Gabriele"},
    ]
  },
}

export const WithLogo: Story = {
    args: {
    title: "Musa",
    logo: Musa,
    items: [
      { link: "www.musaformazione.it", text: "Musa"},
      { link: "www.musaformazione.it", text: "Gabriele"},
    ]
  },
}



export const Selcted: Story = {
    args: {
    title: "Musa",
    logo: Musa,
    selected: 1,
    items: [
      { link: "www.musaformazione.it", text: "Musa"},
      { link: "www.musaformazione.it", text: "Gabriele"},
    ]
  },
}
