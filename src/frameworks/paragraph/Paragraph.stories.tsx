import { Story, Meta } from '@storybook/react';
import ParagraphComponent, { IParagraphProps } from './Paragraph';

export default {
  title: 'Exemple/Paragraph',
  component: ParagraphComponent,
} as Meta;

export const Paragraph: Story<IParagraphProps> = args => <ParagraphComponent {...args}>Paragraph</ParagraphComponent>;

Paragraph.args = {};
