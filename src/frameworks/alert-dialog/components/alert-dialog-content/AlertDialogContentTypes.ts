import { Content as AlertDialogPrimitiveContent } from '@radix-ui/react-alert-dialog';
import { ComponentProps, ElementRef } from 'react';
import { CSS } from '../../../../../stitches.config';
import AlertDialogContentRoot from './components/AlertDialogContentRoot';

export type AlertDialogContentRef = ElementRef<typeof AlertDialogContentRoot>;
export type IAlertDialogContentPrimitiveProps = ComponentProps<typeof AlertDialogPrimitiveContent>;
export type IAlertDialogContentProps = IAlertDialogContentPrimitiveProps & { css?: CSS };
