import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Menu from './Menu';

export type MenuRef = ElementRef<typeof Menu>;
export type IMenuProps = ComponentProps<typeof Menu> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
