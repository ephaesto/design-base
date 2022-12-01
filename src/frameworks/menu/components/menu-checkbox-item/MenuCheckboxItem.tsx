import { forwardRef } from 'react';

import { CheckIcon } from '@radix-ui/react-icons';
import Box from '../../../box/Box';
import MenuCheckboxItemRoot from './components/MenuCheckboxItemRoot';
import MenuItemIndicator from '../MenuItemIndicator';
import { IMenuCheckboxItemProps, MenuCheckboxItemRef } from './MenuCheckboxItemTypes';

const MenuCheckboxItem = forwardRef<MenuCheckboxItemRef, IMenuCheckboxItemProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <MenuCheckboxItemRoot {...props} ref={forwardedRef}>
      <Box as="span" css={{ position: 'absolute', left: '$1' }}>
        <MenuItemIndicator>
          <CheckIcon />
        </MenuItemIndicator>
      </Box>
      {children}
    </MenuCheckboxItemRoot>
  ),
);

MenuCheckboxItem.displayName = 'MenuCheckboxItem';

export default MenuCheckboxItem;
