import { ComponentProps, ElementRef } from 'react';
import { Content as DialogPrimitiveContent } from '@radix-ui/react-dialog';
import { CSS } from '../../../../../stitches.config';
import DialogContentRoot from './components/DialogContentRoot';

export type DialogContentRef = ElementRef<typeof DialogContentRoot>;
export type IDialogContentPrimitiveProps = ComponentProps<typeof DialogPrimitiveContent>;
export type IDialogContentProps = IDialogContentPrimitiveProps & { css?: CSS };
