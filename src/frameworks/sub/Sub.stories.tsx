import { Story, Meta } from '@storybook/react';
import Paragraph from '../paragraph/Paragraph';
import SubComponent, { ISubProps } from './index';

export default {
  title: 'Exemple/Sub',
  component: SubComponent,
} as Meta;

export const Sub: Story<ISubProps> = args => (
  <Paragraph>
    SUB<SubComponent {...args}>sub</SubComponent>
  </Paragraph>
);

Sub.args = {};
