import { Story, Meta } from '@storybook/react';
import { HTMLAttributes } from 'react';

export default {
  title: 'Components/DatePickers/DatePickers',
  component: 'p',
} as unknown as Meta;

export const DatePickers: Story<HTMLAttributes<'p'>> = () => <p>I will create component</p>;

DatePickers.args = {};
