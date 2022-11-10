import { Story, Meta } from '@storybook/react';
import HeadingComponent, { IHeadingProps } from './Heading';

export default {
  title: 'Exemple/Heading',
  component: HeadingComponent,
} as Meta;

export const Heading: Story<IHeadingProps> = args => <HeadingComponent {...args}>Heading</HeadingComponent>;

Heading.args = {};
