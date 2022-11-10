import { ComponentProps, ElementRef, forwardRef } from 'react';
import {
  Content as PopoverPrimitiveContent,
  Portal as PopoverPrimitivePortal,
  Arrow as PopoverPrimitiveArrow,
} from '@radix-ui/react-popover';
import { styled, CSS } from '../../../stitches.config';
import { panelStyles } from '../../css-utils';
import Box from '../box/Box';

const StyledContent = styled(PopoverPrimitiveContent, panelStyles, {
  minWidth: 200,
  minHeight: '$6',
  maxWidth: 265,
  '&:focus': {
    outline: 'none',
  },
});

type PopoverContentRef = ElementRef<typeof StyledContent>;
type IPopoverContentPrimitiveProps = ComponentProps<typeof PopoverPrimitiveContent>;
type IPopoverContentProps = IPopoverContentPrimitiveProps & { css?: CSS; hideArrow?: boolean };

const PopoverContent = forwardRef<PopoverContentRef, IPopoverContentProps>(
  ({ children, hideArrow, ...props }, fowardedRef): JSX.Element => (
    <PopoverPrimitivePortal>
      <StyledContent sideOffset={0} {...props} ref={fowardedRef}>
        {children}
        {!hideArrow && (
          <Box css={{ color: '$panel' }}>
            <PopoverPrimitiveArrow width={11} height={5} style={{ fill: 'currentColor' }} />
          </Box>
        )}
      </StyledContent>
    </PopoverPrimitivePortal>
  ),
);

PopoverContent.displayName = 'PopoverContent';

export default PopoverContent;
