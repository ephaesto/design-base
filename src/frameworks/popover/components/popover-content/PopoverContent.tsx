import { forwardRef } from 'react';
import Box from '../../../box';
import PopoverContentRoot from './components/PopoverContentRoot';
import PopoverPortal from '../PopoverPortal';
import PopoverArrow from '../PopoverArrow';
import { IPopoverContentProps, PopoverContentRef } from './PopoverContentTypes';

const PopoverContent = forwardRef<PopoverContentRef, IPopoverContentProps>(
  ({ children, hideArrow, ...props }, fowardedRef): JSX.Element => (
    <PopoverPortal>
      <PopoverContentRoot sideOffset={0} {...props} ref={fowardedRef}>
        {children}
        {!hideArrow && (
          <Box css={{ color: '$panel' }}>
            <PopoverArrow width={11} height={5} style={{ fill: 'currentColor' }} />
          </Box>
        )}
      </PopoverContentRoot>
    </PopoverPortal>
  ),
);

PopoverContent.displayName = 'PopoverContent';

export default PopoverContent;
