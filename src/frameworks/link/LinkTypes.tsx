import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Link from './Link';

export type LinkRef = ElementRef<typeof Link>;
export type ILinkProps = ComponentProps<typeof Link> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
