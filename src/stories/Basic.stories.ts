import type { Meta, StoryObj } from '@storybook/react';

import { Basic } from './Basic';

const meta = {
  title: 'Example/Basic',
  component: Basic,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
