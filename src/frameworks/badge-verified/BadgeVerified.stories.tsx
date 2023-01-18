import { Story, Meta } from '@storybook/react';
import BadgeVerifiedComponent, { IBadgeVerifiedProps } from './index';

export default {
  title: 'Components/Badge/BadgeVerified',
  component: BadgeVerifiedComponent,
} as Meta;

export const BadgeVerified: Story<IBadgeVerifiedProps> = args => (
  <BadgeVerifiedComponent {...args}>Badge</BadgeVerifiedComponent>
);

BadgeVerified.args = {};
