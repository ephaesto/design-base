import { ComponentProps, ElementRef, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import AccordionRoot from './components/AccordionRoot';

export type AccordionRef = ElementRef<typeof AccordionRoot>;
export type IAccordionPrimitiveProps = ComponentProps<typeof AccordionRoot>;

export type IAccordionProps = IAccordionPrimitiveProps & {
  css?: CSS;
  type?: 'single' | 'multiple';
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
