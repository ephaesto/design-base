import { ReactNode, ComponentProps, ElementRef } from 'react';
import { CSS } from '../../../stitches.config';
import AlertDialog from './AlertDialog';

export type AlertDialogRef = ElementRef<typeof AlertDialog>;
export type IAlertDialogProps = ComponentProps<typeof AlertDialog> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
