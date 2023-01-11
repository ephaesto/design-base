import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Tabs from './Tabs';

export type TabsRef = ElementRef<typeof Tabs>;
export type ITabsProps = ComponentProps<typeof Tabs> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
