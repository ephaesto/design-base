import { Story, Meta } from '@storybook/react';
import BadgeVerifiedComponent, { IBadgeVerifiedProps } from './BadgeVerified';

export default {
  title: 'Exemple/BadgeVerified',
  component: BadgeVerifiedComponent,
} as Meta;

export const BadgeVerified: Story<IBadgeVerifiedProps> = args => (
  <BadgeVerifiedComponent {...args}>Badge</BadgeVerifiedComponent>
);

BadgeVerified.args = {};
