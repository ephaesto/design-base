import { Overlay as AlertDialogPrimitiveOverlay } from '@radix-ui/react-alert-dialog';
import { styled } from '../../../../stitches.config';
import { overlayStyles } from '../../../css-utils';

const AlertDialogOverlay = styled(AlertDialogPrimitiveOverlay, overlayStyles, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

export default AlertDialogOverlay;
