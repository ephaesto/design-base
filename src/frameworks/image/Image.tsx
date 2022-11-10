import { ElementRef, ComponentProps, ReactNode } from 'react';
import { styled, CSS } from '../../../stitches.config';

const Image = styled('img', {
  // Reset
  verticalAlign: 'middle',
  maxWidth: '100%',
});

export type ImageRef = ElementRef<typeof Image>;
export type IImageProps = ComponentProps<typeof Image> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};

export default Image;
