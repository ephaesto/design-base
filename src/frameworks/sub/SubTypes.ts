import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Sub from './Sub';

export type SubRef = ElementRef<typeof Sub>;
export type ISubProps = ComponentProps<typeof Sub> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
