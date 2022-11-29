import { Story, Meta } from '@storybook/react';
import BadgeComponent, { IBadgeProps } from './index';

export default {
  title: 'Exemple/Badge',
  component: BadgeComponent,
} as Meta;

export const Badge: Story<IBadgeProps> = args => <BadgeComponent {...args}>Badge</BadgeComponent>;

Badge.args = {};
