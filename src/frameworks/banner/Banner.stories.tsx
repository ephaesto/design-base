import { Story, Meta } from '@storybook/react';
import BannerComponent, { IBannerProps } from './Banner';

export default {
  title: 'Exemple/Banner',
  component: BannerComponent,
} as Meta;

export const Banner: Story<IBannerProps> = args => <BannerComponent {...args}>Banner</BannerComponent>;

Banner.args = {};
