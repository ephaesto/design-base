import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import ControlGroup from './ControlGroup';

export type ControlGroupRef = ElementRef<typeof ControlGroup>;
export type IControlGroupProps = ComponentProps<typeof ControlGroup> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
