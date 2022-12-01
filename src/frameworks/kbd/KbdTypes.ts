import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Kbd from './Kbd';

export type KbdRef = ElementRef<typeof Kbd>;
export type IKbdProps = ComponentProps<typeof Kbd> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
