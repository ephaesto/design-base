import { ComponentProps, ElementRef, forwardRef } from 'react';
import {
  CheckboxItem as MenuPrimitiveCheckboxItem,
  ItemIndicator as MenuPrimitiveItemIndicator,
} from '@radix-ui/react-menu';
import { CheckIcon } from '@radix-ui/react-icons';
import { styled, CSS } from '../../../stitches.config';
import Box from '../box/Box';
import { itemCss } from '../../css-utils';

const StyledMenuCheckboxItem = styled(MenuPrimitiveCheckboxItem, itemCss);

type MenuCheckboxItemRef = ElementRef<typeof StyledMenuCheckboxItem>;
type IMenuCheckboxItemPrimitiveProps = ComponentProps<typeof MenuPrimitiveCheckboxItem>;
type IMenuCheckboxItemProps = IMenuCheckboxItemPrimitiveProps & { css?: CSS };

const MenuCheckboxItem = forwardRef<MenuCheckboxItemRef, IMenuCheckboxItemProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <StyledMenuCheckboxItem {...props} ref={forwardedRef}>
      <Box as="span" css={{ position: 'absolute', left: '$1' }}>
        <MenuPrimitiveItemIndicator>
          <CheckIcon />
        </MenuPrimitiveItemIndicator>
      </Box>
      {children}
    </StyledMenuCheckboxItem>
  ),
);

MenuCheckboxItem.displayName = 'MenuCheckboxItem';

export default MenuCheckboxItem;
