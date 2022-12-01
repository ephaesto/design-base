import { ComponentProps, ElementRef } from 'react';
import { CheckboxItem as ContextMenuPrimitiveCheckboxItem } from '@radix-ui/react-context-menu';
import { CSS } from '../../../../../stitches.config';
import ContextMenuCheckboxItemRoot from './components/ContextMenuCheckboxItemRoot';

export type ContextMenuCheckboxItemRef = ElementRef<typeof ContextMenuCheckboxItemRoot>;
export type IContextMenuCheckboxItemPrimitiveProps = ComponentProps<typeof ContextMenuPrimitiveCheckboxItem>;
export type IContextMenuCheckboxItemProps = IContextMenuCheckboxItemPrimitiveProps & { css?: CSS };
