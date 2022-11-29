import { Story, Meta } from '@storybook/react';
import BoxComponent, { IBoxProps } from './index';

export default {
  title: 'Exemple/Box',
  component: BoxComponent,
} as Meta;

export const Box: Story<IBoxProps> = args => <BoxComponent {...args}>Box</BoxComponent>;

Box.args = {};
