import { forwardRef } from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import { ItemIndicator as DropdownMenuPrimitiveItemIndicator } from '@radix-ui/react-dropdown-menu';
import Box from '../../../box';
import DropdownMenuCheckboxItemRoot from './components/DropdownMenuCheckboxItemRoot';
import { DropdownMenuCheckboxItemRef, IDropdownMenuCheckboxItemProps } from './DropdownMenuCheckboxItemTypes';

const DropdownMenuCheckboxItem = forwardRef<DropdownMenuCheckboxItemRef, IDropdownMenuCheckboxItemProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <DropdownMenuCheckboxItemRoot {...props} ref={forwardedRef}>
      <Box as="span" css={{ position: 'absolute', left: '$1' }}>
        <DropdownMenuPrimitiveItemIndicator>
          <CheckIcon />
        </DropdownMenuPrimitiveItemIndicator>
      </Box>
      {children}
    </DropdownMenuCheckboxItemRoot>
  ),
);

DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem';

export default DropdownMenuCheckboxItem;
