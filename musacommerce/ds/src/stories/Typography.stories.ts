import type { Meta, StoryObj } from '@storybook/react';

import {
  Typography
} from './../components/typography';

const meta = {
  component: Typography,
} satisfies Meta<typeof Typography>;

type Story = StoryObj<typeof meta>;

export default meta;


export const Heading1: Story = {
  args: {
    level: 1,
    type: "heading",
    text: 'Heading 1',
    color: "#0A2540",
    decoration: "none"
  },
};

export const Heading2: Story = {
  args: {
    level: 2,
    type: "heading",
    text: 'Heading 2',
    color: "#0A2540",
    decoration: "none"
  },
};

export const Heading3: Story = {
  args: {
    level: 3,
    text: 'Heading 3',
    type: "heading",
    color: "#007BFF",
    decoration: "none"
  },
};

export const BodyText: Story = {
  args: {
    text: 'Esempio di Body Text',
    type: "body",
    color: "#212529",
    decoration: "none"
  },
};

export const Subtitle: Story = {
  args: {
    text: 'Esempio di Subtitle',
    type: "subtitle",
    color: "#212529",
    decoration: "underline"
  },
};

export const HelperText: Story = {
  args: {
    text: 'Esempio di Helper Text',
    type: "helper",
    color: "#212529",
    decoration: "none"
  },
};
