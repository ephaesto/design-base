import { Root as ContextMenuPrimitiveRoot } from '@radix-ui/react-context-menu';
import { ElementRef, ComponentProps, ReactNode } from 'react';
import { styled, CSS } from '../../../stitches.config';

const ContextMenu = styled(ContextMenuPrimitiveRoot, {});

export type ContextMenuRef = ElementRef<typeof ContextMenu>;
export type IContextMenuProps = ComponentProps<typeof ContextMenu> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};

export default ContextMenu;
