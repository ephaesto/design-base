import { Story, Meta } from '@storybook/react';
import { HTMLAttributes } from 'react';

export default {
  title: 'Components/Bottom sheets/BottomSheets',
  component: 'p',
} as unknown as Meta;

export const BottomSheets: Story<HTMLAttributes<'p'>> = () => <p>I will create component</p>;

BottomSheets.args = {};
