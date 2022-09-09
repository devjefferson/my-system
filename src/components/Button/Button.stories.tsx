import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  text: 'Button',
  onContrast: false,
  iconEnd: false,
};

export const Border = Template.bind({});
Border.args = {
  text: 'Button',
  onContrast: false,
  border: true,
};

export const Icon = Template.bind({});
Icon.args = {
  onContrast: false,
  text: 'Button',
  icon: 'chevronRight',
  iconSize: 28,
  iconEnd: true,
};
