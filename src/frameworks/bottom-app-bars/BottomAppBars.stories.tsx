import { Story, Meta } from '@storybook/react';
import { HTMLAttributes } from 'react';

export default {
  title: 'Components/Bottom app bars/BottomAppBars',
  component: 'p',
} as unknown as Meta;

export const BottomAppBars: Story<HTMLAttributes<'p'>> = () => <p>I will create component</p>;

BottomAppBars.args = {};
