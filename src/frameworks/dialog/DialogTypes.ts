import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Dialog from './Dialog';

export type DialogRef = ElementRef<typeof Dialog>;
export type IDialogProps = ComponentProps<typeof Dialog> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
