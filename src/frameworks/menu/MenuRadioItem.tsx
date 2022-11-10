import { ComponentProps, ElementRef, forwardRef } from 'react';
import { RadioItem as MenuPrimitiveRadioItem, ItemIndicator as MenuPrimitiveItemIndicator } from '@radix-ui/react-menu';
import { styled, CSS } from '../../../stitches.config';
import Box from '../box/Box';
import { itemCss } from '../../css-utils';

const StyledMenuRadioItem = styled(MenuPrimitiveRadioItem, itemCss);

type MenuRadioItemRef = ElementRef<typeof StyledMenuRadioItem>;
type IMenuRadioItemPrimitiveProps = ComponentProps<typeof MenuPrimitiveRadioItem>;
type IMenuRadioItemProps = IMenuRadioItemPrimitiveProps & { css?: CSS };

const MenuRadioItem = forwardRef<MenuRadioItemRef, IMenuRadioItemProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <StyledMenuRadioItem {...props} ref={forwardedRef}>
      <Box as="span" css={{ position: 'absolute', left: '$1' }}>
        <MenuPrimitiveItemIndicator>
          <Box
            css={{
              width: '$1',
              height: '$1',
              backgroundColor: 'currentColor',
              borderRadius: '$round',
            }}
          />
        </MenuPrimitiveItemIndicator>
      </Box>
      {children}
    </StyledMenuRadioItem>
  ),
);

MenuRadioItem.displayName = 'MenuRadioItem';

export default MenuRadioItem;
