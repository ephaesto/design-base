import { forwardRef } from 'react';
import { Cross1Icon } from '@radix-ui/react-icons';
import IconButton from '../../../icon-button/IconButton';
import SheetOverlay from '../SheetOverlay';
import SheetCloseButton from '../SheetCloseButton';
import SheetPortal from '../SheetPortal';
import SheetContentRoot from './components/SheetContentRoot';
import { ISheetContentProps, SheetContentRef } from './SheetContentTypes';

const SheetContent = forwardRef<SheetContentRef, ISheetContentProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <SheetPortal>
      <SheetOverlay />
      <SheetContentRoot {...props} ref={forwardedRef}>
        {children}
        <SheetCloseButton asChild>
          <IconButton variant="ghost">
            <Cross1Icon />
          </IconButton>
        </SheetCloseButton>
      </SheetContentRoot>
    </SheetPortal>
  ),
);

SheetContent.displayName = 'SheetContent';

export default SheetContent;
