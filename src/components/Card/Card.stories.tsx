import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,

} as ComponentMeta<typeof Card>;

const Template:ComponentStory<typeof Card> = (arg) => <Card {...arg} />;

export const Default = Template.bind({});
Default.args = {
  color: 'red',
  title: 'Title',
  text: 'text',
};
