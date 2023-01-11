import { Story, Meta } from '@storybook/react';
import TextAreaComponent, { ITextAreaProps } from './index';

export default {
  title: 'Exemple/TextArea',
  component: TextAreaComponent,
} as Meta;

export const TextArea: Story<ITextAreaProps> = args => <TextAreaComponent {...args} size="1" placeholder="Size 1" />;

TextArea.args = {};
