import { Story, Meta } from '@storybook/react';
import KbdComponent, { IKbdProps } from './index';

export default {
  title: 'Exemple/Kbd',
  component: KbdComponent,
} as Meta;

export const Kbd: Story<IKbdProps> = args => <KbdComponent {...args}>⇧ Tab</KbdComponent>;

Kbd.args = {};
