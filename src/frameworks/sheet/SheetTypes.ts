import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Sheet from './Sheet';

export type SheetRef = ElementRef<typeof Sheet>;
export type ISheetProps = ComponentProps<typeof Sheet> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
