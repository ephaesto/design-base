import { Root as DialogPrimitiveRoot } from '@radix-ui/react-dialog';
import { ElementRef, ComponentProps, ReactNode } from 'react';
import { styled, CSS } from '../../../stitches.config';

const Dialog = styled(DialogPrimitiveRoot, {});

export type DialogRef = ElementRef<typeof Dialog>;
export type IDialogProps = ComponentProps<typeof Dialog> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
export default Dialog;
