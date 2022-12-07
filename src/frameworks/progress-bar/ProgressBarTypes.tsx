import { ComponentProps, ElementRef } from 'react';
import { Root as ProgressPrimitiveRoot } from '@radix-ui/react-progress';
import { CSS, VariantProps } from '../../../stitches.config';
import ProgressBarRoot from './components/ProgressBarRoot';

export type ProgressBarRef = ElementRef<typeof ProgressBarRoot>;
export type ProgressBarVariants = VariantProps<typeof ProgressBarRoot>;
export type IProgressBarPrimitiveProps = ComponentProps<typeof ProgressPrimitiveRoot>;
export type IProgressBarProps = IProgressBarPrimitiveProps & ProgressBarVariants & { css?: CSS };
