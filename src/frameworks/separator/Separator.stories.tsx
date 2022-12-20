import { Story, Meta } from '@storybook/react';
import SeparatorComponent, { ISeparatorProps } from './index';

export default {
  title: 'Exemple/Separator',
  component: SeparatorComponent,
} as Meta;

export const Separator: Story<ISeparatorProps> = args => <SeparatorComponent {...args} size="2" />;

Separator.args = {};
