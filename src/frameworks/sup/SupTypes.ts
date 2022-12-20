import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Sup from './Sup';

export type SupRef = ElementRef<typeof Sup>;
export type ISupProps = ComponentProps<typeof Sup> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
