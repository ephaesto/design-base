import { Story, Meta } from '@storybook/react';
import Paragraph from '../paragraph/Paragraph';
import SupComponent, { ISupProps } from './index';

export default {
  title: 'Exemple/Sup',
  component: SupComponent,
} as Meta;

export const Sup: Story<ISupProps> = args => (
  <Paragraph>
    SUB<SupComponent {...args}>sub</SupComponent>
  </Paragraph>
);

Sup.args = {};
