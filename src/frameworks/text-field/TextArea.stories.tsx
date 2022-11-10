import { Story, Meta } from '@storybook/react';
import TextFieldComponent, { ITextFieldProps } from './TextField';

export default {
  title: 'Exemple/TextField',
  component: TextFieldComponent,
} as Meta;

export const TextField: Story<ITextFieldProps> = args => <TextFieldComponent {...args} size="1" placeholder="Size 1" />;

TextField.args = {};
