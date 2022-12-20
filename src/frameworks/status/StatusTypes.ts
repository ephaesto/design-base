import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Status from './Status';

export type StatusRef = ElementRef<typeof Status>;
export type IStatusProps = ComponentProps<typeof Status> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
