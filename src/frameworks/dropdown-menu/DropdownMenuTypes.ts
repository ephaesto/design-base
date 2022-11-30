import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import DropdownMenu from './DropdownMenu';

export type DropdownMenuRef = ElementRef<typeof DropdownMenu>;
export type IDropdownMenuProps = ComponentProps<typeof DropdownMenu> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
