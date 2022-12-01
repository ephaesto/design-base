import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Label from './Label';

export type LabelRef = ElementRef<typeof Label>;
export type ILabelProps = ComponentProps<typeof Label> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
