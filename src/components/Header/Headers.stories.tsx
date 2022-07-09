import Header from './Header';

export default {
  title: 'Header',
  component: Header,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args:any) => <Header {...args} />;

export const Default = Template.bind({});
