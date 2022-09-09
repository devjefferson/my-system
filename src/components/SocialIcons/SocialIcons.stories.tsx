import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SocialIcons from './';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'SocialIcons',
  component: SocialIcons,
} as ComponentMeta<typeof SocialIcons>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SocialIcons> = (args) => (
  <SocialIcons {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  onContrast: false,
  facebook: '/',
  instagram: '/',
  twitter: '/',
  youtube: '/',
};
