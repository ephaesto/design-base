import { Story, Meta } from '@storybook/react';
import BannerComponent, { IBannerProps } from './index';

export default {
  title: 'Exemple/Banner',
  component: BannerComponent,
} as Meta;

export const Banner: Story<IBannerProps> = args => <BannerComponent {...args}>Banner</BannerComponent>;

Banner.args = {};
