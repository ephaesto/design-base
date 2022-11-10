import { Story, Meta } from '@storybook/react';
import CheckboxComponent, { ICheckboxProps } from './Checkbox';

export default {
  title: 'Exemple/Checkbox',
  component: CheckboxComponent,
} as Meta;

export const Checkbox: Story<ICheckboxProps> = args => <CheckboxComponent {...args}>Checkbox</CheckboxComponent>;

Checkbox.args = {};
