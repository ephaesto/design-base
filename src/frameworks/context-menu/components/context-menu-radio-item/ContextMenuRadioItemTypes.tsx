import { ComponentProps, ElementRef } from 'react';
import { RadioItem as ContextMenuPrimitiveRadioItem } from '@radix-ui/react-context-menu';
import { CSS } from '../../../../../stitches.config';
import ContextMenuRadioItemRoot from './components/ContextMenuRadioItemRoot';

export type ContextMenuRadioItemRef = ElementRef<typeof ContextMenuRadioItemRoot>;
export type IContextMenuRadioItemPrimitiveProps = ComponentProps<typeof ContextMenuPrimitiveRadioItem>;
export type IContextMenuRadioItemProps = IContextMenuRadioItemPrimitiveProps & { css?: CSS };
