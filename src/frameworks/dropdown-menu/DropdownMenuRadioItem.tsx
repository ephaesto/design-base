import { ComponentProps, ElementRef, forwardRef } from 'react';
import {
  RadioItem as DropdownMenuPrimitiveRadioItem,
  ItemIndicator as DropdownMenuPrimitiveItemIndicator,
} from '@radix-ui/react-dropdown-menu';
import { styled, CSS } from '../../../stitches.config';
import Box from '../box/Box';
import { itemCss } from '../../css-utils';

const StyledDropdownMenuRadioItem = styled(DropdownMenuPrimitiveRadioItem, itemCss);

type DropdownMenuRadioItemRef = ElementRef<typeof StyledDropdownMenuRadioItem>;
type IDropdownMenuRadioPrimitiveProps = ComponentProps<typeof DropdownMenuPrimitiveRadioItem>;
type IDropdownMenuRadioItemProps = IDropdownMenuRadioPrimitiveProps & { css?: CSS };

const DropdownMenuRadioItem = forwardRef<DropdownMenuRadioItemRef, IDropdownMenuRadioItemProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <StyledDropdownMenuRadioItem {...props} ref={forwardedRef}>
      <Box as="span" css={{ position: 'absolute', left: '$1' }}>
        <DropdownMenuPrimitiveItemIndicator>
          <Box
            css={{
              width: '$1',
              height: '$1',
              backgroundColor: 'currentColor',
              borderRadius: '$round',
            }}
          />
        </DropdownMenuPrimitiveItemIndicator>
      </Box>
      {children}
    </StyledDropdownMenuRadioItem>
  ),
);

DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem';

export default DropdownMenuRadioItem;
