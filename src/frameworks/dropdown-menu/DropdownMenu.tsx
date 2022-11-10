import { Root as DropdownMenuPrimitiveRoot } from '@radix-ui/react-dropdown-menu';
import { ElementRef, ComponentProps, ReactNode } from 'react';
import { styled, CSS } from '../../../stitches.config';

const DropdownMenu = styled(DropdownMenuPrimitiveRoot, {});

export type DropdownMenuRef = ElementRef<typeof DropdownMenu>;
export type IDropdownMenuProps = ComponentProps<typeof DropdownMenu> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};

export default DropdownMenu;
