import { forwardRef } from 'react';
import Box from '../../../box';
import MenuItemIndicator from '../MenuItemIndicator';
import MenuRadioItemRoot from './components/MenuRadioItemRoot';
import { IMenuRadioItemProps, MenuRadioItemRef } from './MenuRadioItemTypes';

const MenuRadioItem = forwardRef<MenuRadioItemRef, IMenuRadioItemProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <MenuRadioItemRoot {...props} ref={forwardedRef}>
      <Box as="span" css={{ position: 'absolute', left: '$1' }}>
        <MenuItemIndicator>
          <Box
            css={{
              width: '$1',
              height: '$1',
              backgroundColor: 'currentColor',
              borderRadius: '$round',
            }}
          />
        </MenuItemIndicator>
      </Box>
      {children}
    </MenuRadioItemRoot>
  ),
);

MenuRadioItem.displayName = 'MenuRadioItem';

export default MenuRadioItem;
