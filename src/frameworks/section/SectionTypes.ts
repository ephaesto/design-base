import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Section from './Section';

export type SectionRef = ElementRef<typeof Section>;
export type ISectionProps = ComponentProps<typeof Section> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
