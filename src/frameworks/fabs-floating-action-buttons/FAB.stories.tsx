import React, { HTMLAttributes } from 'react';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/FABs/FAB',
  component: 'p',
} as unknown as Meta;

export const FAB: Story<HTMLAttributes<'p'>> = () => <p>I will create component</p>;

FAB.args = {};
