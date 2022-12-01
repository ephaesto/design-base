import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import ContextMenu from './ContextMenu';

export type ContextMenuRef = ElementRef<typeof ContextMenu>;
export type IContextMenuProps = ComponentProps<typeof ContextMenu> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
