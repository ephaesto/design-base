import { Story, Meta } from '@storybook/react';
import ImageComponent, { IImageProps } from './index';

export default {
  title: 'Exemple/Image',
  component: ImageComponent,
} as Meta;

export const Image: Story<IImageProps> = args => (
  <ImageComponent
    {...args}
    src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain"
    css={{ width: '10rem' }}
  />
);

Image.args = {};
