import { ComponentProps, ElementRef, forwardRef } from 'react';
import {
  RadioItem as ContextMenuPrimitiveRadioItem,
  ItemIndicator as ContextMenuPrimitiveItemIndicator,
} from '@radix-ui/react-context-menu';
import { styled, CSS } from '../../../stitches.config';
import Box from '../box/Box';
import { itemCss } from '../../css-utils';

const StyledContextMenuRadioItem = styled(ContextMenuPrimitiveRadioItem, itemCss);

type ContextMenuRadioItemRef = ElementRef<typeof StyledContextMenuRadioItem>;
type IContextMenuRadioItemPrimitiveProps = ComponentProps<typeof ContextMenuPrimitiveRadioItem>;
type IContextMenuCheckboxItemProps = IContextMenuRadioItemPrimitiveProps & { css?: CSS };

const ContextMenuRadioItem = forwardRef<ContextMenuRadioItemRef, IContextMenuCheckboxItemProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <StyledContextMenuRadioItem {...props} ref={forwardedRef}>
      <Box as="span" css={{ position: 'absolute', left: '$1' }}>
        <ContextMenuPrimitiveItemIndicator>
          <Box
            css={{
              width: '$1',
              height: '$1',
              backgroundColor: 'currentColor',
              borderRadius: '$round',
            }}
          />
        </ContextMenuPrimitiveItemIndicator>
      </Box>
      {children}
    </StyledContextMenuRadioItem>
  ),
);

ContextMenuRadioItem.displayName = 'ContextMenuRadioItem';

export default ContextMenuRadioItem;
