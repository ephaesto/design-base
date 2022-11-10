import { ComponentProps, ElementRef, forwardRef } from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import {
  ItemIndicator as ContextMenuPrimitiveItemIndicator,
  CheckboxItem as ContextMenuPrimitiveCheckboxItem,
} from '@radix-ui/react-context-menu';
import { styled, CSS } from '../../../stitches.config';
import Box from '../box/Box';
import { itemCss } from '../../css-utils';

const StyledContextMenuCheckboxItem = styled(ContextMenuPrimitiveCheckboxItem, itemCss);

type ContextMenuCheckboxItemRef = ElementRef<typeof StyledContextMenuCheckboxItem>;
type IContextMenuCheckboxItemPrimitiveProps = ComponentProps<typeof ContextMenuPrimitiveCheckboxItem>;
type IContextMenuCheckboxItemProps = IContextMenuCheckboxItemPrimitiveProps & { css?: CSS };

const ContextMenuCheckboxItem = forwardRef<ContextMenuCheckboxItemRef, IContextMenuCheckboxItemProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <StyledContextMenuCheckboxItem {...props} ref={forwardedRef}>
      <Box as="span" css={{ position: 'absolute', left: '$1' }}>
        <ContextMenuPrimitiveItemIndicator>
          <CheckIcon />
        </ContextMenuPrimitiveItemIndicator>
      </Box>
      {children}
    </StyledContextMenuCheckboxItem>
  ),
);

ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem';

export default ContextMenuCheckboxItem;
