import { ComponentProps, ElementRef } from 'react';
import { Content as ContextMenuPrimitiveContent } from '@radix-ui/react-context-menu';
import { CSS } from '../../../../../stitches.config';
import ContextMenuContentRoot from './components/ContextMenuContentRoot';

export type ContextMenuContentRef = ElementRef<typeof ContextMenuContentRoot>;
export type IContextMenuContentPrimitiveProps = ComponentProps<typeof ContextMenuPrimitiveContent>;
export type IContextMenuContentProps = IContextMenuContentPrimitiveProps & { css?: CSS };
