import { ComponentProps, ElementRef, forwardRef } from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import {
  CheckboxItem as DropdownMenuPrimitiveCheckboxItem,
  ItemIndicator as DropdownMenuPrimitiveItemIndicator,
} from '@radix-ui/react-dropdown-menu';
import { styled, CSS } from '../../../stitches.config';
import Box from '../box/Box';
import { itemCss } from '../../css-utils';

const StyledDropdownMenuCheckboxItem = styled(DropdownMenuPrimitiveCheckboxItem, itemCss);

type DropdownMenuCheckboxItemRef = ElementRef<typeof StyledDropdownMenuCheckboxItem>;
type IDropdownMenuCheckboxItemPrimitiveProps = ComponentProps<typeof DropdownMenuPrimitiveCheckboxItem>;
type IDropdownMenuCheckboxItemProps = IDropdownMenuCheckboxItemPrimitiveProps & { css?: CSS };

const DropdownMenuCheckboxItem = forwardRef<DropdownMenuCheckboxItemRef, IDropdownMenuCheckboxItemProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <StyledDropdownMenuCheckboxItem {...props} ref={forwardedRef}>
      <Box as="span" css={{ position: 'absolute', left: '$1' }}>
        <DropdownMenuPrimitiveItemIndicator>
          <CheckIcon />
        </DropdownMenuPrimitiveItemIndicator>
      </Box>
      {children}
    </StyledDropdownMenuCheckboxItem>
  ),
);

DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem';

export default DropdownMenuCheckboxItem;
