import { ComponentProps, ElementRef, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Panel from './Panel';

export type PanelRef = ElementRef<typeof Panel>;
export type IPanelProps = ComponentProps<typeof Panel> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
