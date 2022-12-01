import { ComponentProps, ElementRef } from 'react';
import { RadioItem as DropdownMenuPrimitiveRadioItem } from '@radix-ui/react-dropdown-menu';
import { CSS } from '../../../../../stitches.config';
import DropdownMenuRadioItemRoot from './components/DropdownMenuRadioItemRoot';

export type DropdownMenuRadioItemRef = ElementRef<typeof DropdownMenuRadioItemRoot>;
export type IDropdownMenuRadioPrimitiveProps = ComponentProps<typeof DropdownMenuPrimitiveRadioItem>;
export type IDropdownMenuRadioItemProps = IDropdownMenuRadioPrimitiveProps & { css?: CSS };
