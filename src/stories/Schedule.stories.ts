import type { Meta, StoryObj } from '@storybook/react';

import Schedule from './Schedule';

const meta = {
  title: 'Example/Schedule',
  component: Schedule,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Schedule>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
