import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Title = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Title.args = {
  children: 'MyApp',
  size: 'xsmall',
};
