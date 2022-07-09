// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Style Variants',
      defaultValue: 'primary',
      options: ['primary', 'transparent--white', 'blue--white'],
      control: {
        type: 'radio',
      },
    },
    size: {
      type: 'string',
      description: 'Button size',
      defaultValue: 'medium',
      options: ['medium', 'large'],
      control: {
        type: 'radio',
      },
    },
    type: {
      type: 'string',
      description: 'Button type',
      defaultValue: 'button',
      options: ['button', 'submit'],
      control: {
        type: 'radio',
      },
    },
    text: {
      type: 'string',
      description: 'Button label',
      name: 'label',
    },
  },
} as ComponentMeta<typeof Button>;

const Template:ComponentStory<typeof Button> = (arg) => <Button {...arg} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Press me',
  variant: 'primary',
};
