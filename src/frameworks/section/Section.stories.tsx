import { Story, Meta } from '@storybook/react';
import SectionComponent, { ISectionProps } from './index';

export default {
  title: 'Exemple/Section',
  component: SectionComponent,
} as Meta;

export const Section: Story<ISectionProps> = args => <SectionComponent {...args}>Overlay</SectionComponent>;

Section.args = {};
