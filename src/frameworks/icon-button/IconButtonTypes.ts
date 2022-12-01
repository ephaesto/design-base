import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import IconButton from './IconButton';

export type IconButtonRef = ElementRef<typeof IconButton>;
export type IIconButtonProps = ComponentProps<typeof IconButton> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
