import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import TabLink from './TabLink';

export type TabLinkRef = ElementRef<typeof TabLink>;
export type ITabLinkProps = ComponentProps<typeof TabLink> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
