import { ComponentProps, ElementRef } from 'react';
import { Content as PopoverPrimitiveContent } from '@radix-ui/react-popover';
import { CSS } from '../../../../../stitches.config';
import PopoverContentRoot from './components/PopoverContentRoot';

export type PopoverContentRef = ElementRef<typeof PopoverContentRoot>;
export type IPopoverContentPrimitiveProps = ComponentProps<typeof PopoverPrimitiveContent>;
export type IPopoverContentProps = IPopoverContentPrimitiveProps & { css?: CSS; hideArrow?: boolean };
