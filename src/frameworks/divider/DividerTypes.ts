import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Divider from './Divider';

export type DividerRef = ElementRef<typeof Divider>;
export type IDividerProps = ComponentProps<typeof Divider> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
