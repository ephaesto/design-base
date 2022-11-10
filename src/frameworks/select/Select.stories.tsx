import { Story, Meta } from '@storybook/react';
import SelectComponent, { ISelectProps } from './Select';

export default {
  title: 'Exemple/Select',
  component: SelectComponent,
} as Meta;

export const Select: Story<ISelectProps> = args => (
  <SelectComponent {...args}>
    <option value="SelectDefault" label="Select Default" />
    <option value="Select1" label="Select 1" />
    <option value="Select2" label="Select 2" />
  </SelectComponent>
);

Select.args = {};
