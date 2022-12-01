import { forwardRef } from 'react';
import { Cross1Icon } from '@radix-ui/react-icons';
import IconButton from '../../../icon-button/IconButton';
import DialogClose from '../DialogClose';
import DialogPortal from '../DialogPortal';
import DialogOverlay from '../DialogOverlay';
import DialogContentRoot from './components/DialogContentRoot';
import { DialogContentRef, IDialogContentProps } from './DialogContentTypes';

const DialogContent = forwardRef<DialogContentRef, IDialogContentProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <DialogPortal>
      <DialogOverlay />
      <DialogContentRoot {...props} ref={forwardedRef}>
        {children}
        <DialogClose asChild>
          <IconButton variant="ghost">
            <Cross1Icon />
          </IconButton>
        </DialogClose>
      </DialogContentRoot>
    </DialogPortal>
  ),
);

DialogContent.displayName = 'DialogContent';

export default DialogContent;
