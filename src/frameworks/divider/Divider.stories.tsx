import { Story, Meta } from '@storybook/react';
import DividerComponent, { IDividerProps } from './index';

export default {
  title: 'Components/Dividers/Divider',
  component: DividerComponent,
} as Meta;

export const Divider: Story<IDividerProps> = args => <DividerComponent {...args} size="2" />;

Divider.args = {};
