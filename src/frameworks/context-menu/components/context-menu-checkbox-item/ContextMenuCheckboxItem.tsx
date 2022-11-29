import { forwardRef } from 'react';
import { CheckIcon } from '@radix-ui/react-icons';

import Box from '../../../box';
import ContextMenuCheckboxItemRoot from './components/ContextMenuCheckboxItemRoot';
import ContextMenuItemIndicator from '../ContextMenuItemIndicator';
import { ContextMenuCheckboxItemRef, IContextMenuCheckboxItemProps } from './ContextMenuCheckboxItemTypes';

const ContextMenuCheckboxItem = forwardRef<ContextMenuCheckboxItemRef, IContextMenuCheckboxItemProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <ContextMenuCheckboxItemRoot {...props} ref={forwardedRef}>
      <Box as="span" css={{ position: 'absolute', left: '$1' }}>
        <ContextMenuItemIndicator>
          <CheckIcon />
        </ContextMenuItemIndicator>
      </Box>
      {children}
    </ContextMenuCheckboxItemRoot>
  ),
);

ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem';

export default ContextMenuCheckboxItem;
