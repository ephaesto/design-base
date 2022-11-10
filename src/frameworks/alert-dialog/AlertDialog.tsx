import { Root as AlertDialogPrimitiveRoot } from '@radix-ui/react-alert-dialog';
import { ReactNode, ComponentProps, ElementRef } from 'react';
import { styled, CSS } from '../../../stitches.config';

const AlertDialog = styled(AlertDialogPrimitiveRoot, {});

export type AlertDialogRef = ElementRef<typeof AlertDialog>;
export type IAlertDialogProps = ComponentProps<typeof AlertDialog> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};

export default AlertDialog;
