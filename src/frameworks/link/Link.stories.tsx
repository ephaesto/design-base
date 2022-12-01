import { Story, Meta } from '@storybook/react';
import LinkComponent, { ILinkProps } from './index';

export default {
  title: 'Exemple/Link',
  component: LinkComponent,
} as Meta;

export const Link: Story<ILinkProps> = args => <LinkComponent {...args}>Link</LinkComponent>;

Link.args = {};
