import type { Meta, StoryObj } from '@storybook/react';

import { Accordions } from './page';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Accordions> = {
  title: 'General/Accordions',
  component: Accordions,
} as Meta;

export default meta;
type Story = StoryObj<typeof Accordions>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Docs: Story = {

};


