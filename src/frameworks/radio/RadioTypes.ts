import { ComponentProps, ElementRef, ReactNode } from 'react';
import { Item as RadioPrimitiveRoot } from '@radix-ui/react-radio-group';
import { CSS, VariantProps } from '../../../stitches.config';
import RadioRoot from './components/RadioRoot';
import RadioGroup from './RadioGroup';

export type RadioRef = ElementRef<typeof RadioRoot>;
export type RadioVariants = VariantProps<typeof RadioRoot>;
export type IRadioItemPrimitiveProps = ComponentProps<typeof RadioPrimitiveRoot>;
export type IRadioProps = IRadioItemPrimitiveProps & RadioVariants & { css?: CSS };

export type RadioGroupRef = ElementRef<typeof RadioGroup>;
export type IRadioGroupProps = ComponentProps<typeof RadioGroup> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
