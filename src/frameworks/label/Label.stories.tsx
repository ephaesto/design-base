import { Story, Meta } from '@storybook/react';
import LabelComponent, { ILabelProps } from './Label';

export default {
  title: 'Exemple/Label',
  component: LabelComponent,
} as Meta;

export const Label: Story<ILabelProps> = args => <LabelComponent {...args}>Label</LabelComponent>;

Label.args = {};
