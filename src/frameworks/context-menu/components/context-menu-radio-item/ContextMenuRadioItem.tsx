import { forwardRef } from 'react';
import Box from '../../../box';
import ContextMenuItemIndicator from '../ContextMenuItemIndicator';
import ContextMenuRadioItemRoot from './components/ContextMenuRadioItemRoot';
import { ContextMenuRadioItemRef, IContextMenuRadioItemProps } from './ContextMenuRadioItemTypes';

const ContextMenuRadioItem = forwardRef<ContextMenuRadioItemRef, IContextMenuRadioItemProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <ContextMenuRadioItemRoot {...props} ref={forwardedRef}>
      <Box as="span" css={{ position: 'absolute', left: '$1' }}>
        <ContextMenuItemIndicator>
          <Box
            css={{
              width: '$1',
              height: '$1',
              backgroundColor: 'currentColor',
              borderRadius: '$round',
            }}
          />
        </ContextMenuItemIndicator>
      </Box>
      {children}
    </ContextMenuRadioItemRoot>
  ),
);

ContextMenuRadioItem.displayName = 'ContextMenuRadioItem';

export default ContextMenuRadioItem;
