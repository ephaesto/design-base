import { Story, Meta } from '@storybook/react';
import TextComponent, { ITextProps } from './Text';

export default {
  title: 'Exemple/Text',
  component: TextComponent,
} as Meta;

export const Text: Story<ITextProps> = args => <TextComponent {...args}>Text</TextComponent>;

Text.args = {};
