import type { Meta, StoryObj } from '@storybook/react';

import OverlappingSchedule from './OverlappingSchedule';

const meta = {
  title: 'Example/OverlappingSchedule',
  component: OverlappingSchedule,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof OverlappingSchedule>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
