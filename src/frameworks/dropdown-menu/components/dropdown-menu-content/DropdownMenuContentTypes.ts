import { ComponentProps, ElementRef } from 'react';
import { Content as DropdownMenuPrimitiveContent } from '@radix-ui/react-dropdown-menu';
import { CSS } from '../../../../../stitches.config';
import DropdownMenuContentRoot from './components/DropdownMenuContentRoot';

export type DropdownMenuContentRef = ElementRef<typeof DropdownMenuContentRoot>;
export type IDropdownMenuContentPrimitiveProps = ComponentProps<typeof DropdownMenuPrimitiveContent>;
export type IDropdownMenuContentProps = IDropdownMenuContentPrimitiveProps & { css?: CSS };
