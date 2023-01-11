import { Story, Meta } from '@storybook/react';
import SwitchComponent, { ISwitchProps } from './index';

export default {
  title: 'Exemple/Switch',
  component: SwitchComponent,
} as Meta;

export const Switch: Story<ISwitchProps> = args => <SwitchComponent {...args} />;

Switch.args = {};
