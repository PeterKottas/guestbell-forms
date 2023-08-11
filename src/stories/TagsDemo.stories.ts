import type { Meta, StoryObj } from '@storybook/react';

import { TagsDemo } from './TagsDemo';

const meta = {
  title: 'Example/Tags',
  component: TagsDemo,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TagsDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
