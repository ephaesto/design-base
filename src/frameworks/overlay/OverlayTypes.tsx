import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Overlay from './Overlay';

export type OverlayRef = ElementRef<typeof Overlay>;
export type IOverlayProps = ComponentProps<typeof Overlay> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
