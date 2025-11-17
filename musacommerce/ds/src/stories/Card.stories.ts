import type { StoryObj, Meta } from '@storybook/react';
import { Card } from '../components/card';

const meta = {
  component: Card
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    button: {
      label: "bottone",
      disabled: false,
      onClick: () => console.log("Hai cliccato un bottone della card")
    },
    description: "Sono una card",
    title: "Titolo"
  }
}
