import {
  Overlay as AlertDialogPrimitiveOverlay,
  Content as AlertDialogPrimitiveContent,
  Portal as AlertDialogPrimitivePortal,
} from '@radix-ui/react-alert-dialog';
import { ComponentProps, ElementRef, forwardRef } from 'react';
import { styled, CSS } from '../../../stitches.config';
import { overlayStyles, panelStyles } from '../../css-utils';

const StyledOverlay = styled(AlertDialogPrimitiveOverlay, overlayStyles, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

export const StyledContent = styled(AlertDialogPrimitiveContent, panelStyles, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxHeight: '85vh',
  padding: '$4',
  marginTop: '-5vh',

  '&:focus': {
    outline: 'none',
  },
});

type AlertDialogContentRef = ElementRef<typeof StyledContent>;
type IAlertDialogContentPrimitiveProps = ComponentProps<typeof AlertDialogPrimitiveContent>;
type IAlertDialogContentProps = IAlertDialogContentPrimitiveProps & { css?: CSS };

const AlertDialogContent = forwardRef<AlertDialogContentRef, IAlertDialogContentProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <AlertDialogPrimitivePortal>
      <StyledOverlay />
      <StyledContent {...props} ref={forwardedRef}>
        {children}
      </StyledContent>
    </AlertDialogPrimitivePortal>
  ),
);

AlertDialogContent.displayName = 'AlertDialogContent';

export default AlertDialogContent;
