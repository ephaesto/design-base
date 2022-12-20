import {
  Content as AlertDialogPrimitiveContent,
  Portal as AlertDialogPrimitivePortal,
} from '@radix-ui/react-alert-dialog';
import { ComponentProps, ElementRef, forwardRef } from 'react';
import { CSS } from '../../../../../stitches.config';
import AlertDialogOverlay from '../AlertDialogOverlay';
import AlertDialogContentRoot from './components/AlertDialogContentRoot';

type AlertDialogContentRef = ElementRef<typeof AlertDialogContentRoot>;
type IAlertDialogContentPrimitiveProps = ComponentProps<typeof AlertDialogPrimitiveContent>;
type IAlertDialogContentProps = IAlertDialogContentPrimitiveProps & { css?: CSS };

const AlertDialogContent = forwardRef<AlertDialogContentRef, IAlertDialogContentProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <AlertDialogPrimitivePortal>
      <AlertDialogOverlay />
      <AlertDialogContentRoot {...props} ref={forwardedRef}>
        {children}
      </AlertDialogContentRoot>
    </AlertDialogPrimitivePortal>
  ),
);

AlertDialogContent.displayName = 'AlertDialogContent';

export default AlertDialogContent;
