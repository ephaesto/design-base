import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Popover from './Popover';

export type PopoverRef = ElementRef<typeof Popover>;
export type IPopoverProps = ComponentProps<typeof Popover> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
