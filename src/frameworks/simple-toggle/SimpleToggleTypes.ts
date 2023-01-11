import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import SimpleToggle from './SimpleToggle';

export type SimpleToggleRef = ElementRef<typeof SimpleToggle>;
export type ISimpleToggleProps = ComponentProps<typeof SimpleToggle> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
