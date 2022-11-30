import { ComponentProps, ElementRef } from 'react';
import { CheckboxItem as DropdownMenuPrimitiveCheckboxItem } from '@radix-ui/react-dropdown-menu';
import { CSS } from '../../../../../stitches.config';
import DropdownMenuCheckboxItemRoot from './components/DropdownMenuCheckboxItemRoot';

export type DropdownMenuCheckboxItemRef = ElementRef<typeof DropdownMenuCheckboxItemRoot>;
export type IDropdownMenuCheckboxItemPrimitiveProps = ComponentProps<typeof DropdownMenuPrimitiveCheckboxItem>;
export type IDropdownMenuCheckboxItemProps = IDropdownMenuCheckboxItemPrimitiveProps & { css?: CSS };
