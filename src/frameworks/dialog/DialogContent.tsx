import { ComponentProps, ElementRef, forwardRef } from 'react';
import {
  Overlay as DialogPrimitiveOverlay,
  Content as DialogPrimitiveContent,
  Close as DialogPrimitiveClose,
  Portal as DialogPrimitivePortal,
} from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { styled, CSS } from '../../../stitches.config';
import IconButton from '../icon-button/IconButton';
import { overlayStyles, panelStyles } from '../../css-utils';

const StyledOverlay = styled(DialogPrimitiveOverlay, overlayStyles, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

const StyledContent = styled(DialogPrimitiveContent, panelStyles, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxHeight: '85vh',
  padding: '$4',
  marginTop: '-5vh',
  willChange: 'transform',

  '&:focus': {
    outline: 'none',
  },
});

const StyledCloseButton = styled(DialogPrimitiveClose, {
  position: 'absolute',
  top: '$2',
  right: '$2',
});

type DialogContentRef = ElementRef<typeof StyledContent>;
type IDialogContentPrimitiveProps = ComponentProps<typeof DialogPrimitiveContent>;
type IDialogContentProps = IDialogContentPrimitiveProps & { css?: CSS };

const DialogContent = forwardRef<DialogContentRef, IDialogContentProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <DialogPrimitivePortal>
      <StyledOverlay />
      <StyledContent {...props} ref={forwardedRef}>
        {children}
        <StyledCloseButton asChild>
          <IconButton variant="ghost">
            <Cross1Icon />
          </IconButton>
        </StyledCloseButton>
      </StyledContent>
    </DialogPrimitivePortal>
  ),
);

DialogContent.displayName = 'DialogContent';

export default DialogContent;
