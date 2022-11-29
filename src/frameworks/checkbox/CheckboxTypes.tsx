import { ComponentProps, ElementRef, ReactNode } from 'react';
import { Root as CheckboxPrimitiveRoot } from '@radix-ui/react-checkbox';
import { CSS, VariantProps } from '../../../stitches.config';
import CheckboxRoot from './components/CheckboxRoot';

export type CheckboxRef = ElementRef<typeof CheckboxRoot>;
type CheckboxVariants = VariantProps<typeof CheckboxRoot>;
export type ICheckboxPrimitiveProps = ComponentProps<typeof CheckboxPrimitiveRoot>;
export type ICheckboxProps = ICheckboxPrimitiveProps &
  CheckboxVariants & { css?: CSS; as?: keyof JSX.IntrinsicElements | ReactNode };
