import { ComponentProps, ElementRef } from 'react';
import { Content as SheetPrimitiveContent } from '@radix-ui/react-dialog';
import { VariantProps, CSS } from '../../../../../stitches.config';
import SheetContentRoot from './components/SheetContentRoot';

export type SheetContentRef = ElementRef<typeof SheetContentRoot>;
export type SheetContentVariants = VariantProps<typeof SheetContentRoot>;
export type ISheetContentPrimitiveProps = ComponentProps<typeof SheetPrimitiveContent>;
export type ISheetContentProps = ISheetContentPrimitiveProps & SheetContentVariants & { css?: CSS };
