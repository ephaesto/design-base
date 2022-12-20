import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Separator from './Separator';

export type SeparatorRef = ElementRef<typeof Separator>;
export type ISeparatorProps = ComponentProps<typeof Separator> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
