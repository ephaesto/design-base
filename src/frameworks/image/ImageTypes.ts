import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Image from './Image';

export type ImageRef = ElementRef<typeof Image>;
export type IImageProps = ComponentProps<typeof Image> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
