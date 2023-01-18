import { Story, Meta } from '@storybook/react';
import CheckboxComponent, { ICheckboxProps } from './index';

export default {
  title: 'Components/Checkboxes/Checkbox',
  component: CheckboxComponent,
} as Meta;

export const Checkbox: Story<ICheckboxProps> = args => <CheckboxComponent {...args}>Checkbox</CheckboxComponent>;

Checkbox.args = {};
