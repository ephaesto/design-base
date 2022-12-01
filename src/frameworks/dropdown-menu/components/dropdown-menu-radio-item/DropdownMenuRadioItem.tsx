import { ComponentProps, ElementRef, forwardRef } from 'react';
import { RadioItem as DropdownMenuPrimitiveRadioItem } from '@radix-ui/react-dropdown-menu';
import { CSS } from '../../../../../stitches.config';
import Box from '../../../box/Box';
import DropdownMenuRadioItemRoot from './components/DropdownMenuRadioItemRoot';
import DropdownMenuItemIndicator from '../DropdownMenuItemIndicator';

type DropdownMenuRadioItemRef = ElementRef<typeof DropdownMenuRadioItemRoot>;
type IDropdownMenuRadioPrimitiveProps = ComponentProps<typeof DropdownMenuPrimitiveRadioItem>;
type IDropdownMenuRadioItemProps = IDropdownMenuRadioPrimitiveProps & { css?: CSS };

const DropdownMenuRadioItem = forwardRef<DropdownMenuRadioItemRef, IDropdownMenuRadioItemProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <DropdownMenuRadioItemRoot {...props} ref={forwardedRef}>
      <Box as="span" css={{ position: 'absolute', left: '$1' }}>
        <DropdownMenuItemIndicator>
          <Box
            css={{
              width: '$1',
              height: '$1',
              backgroundColor: 'currentColor',
              borderRadius: '$round',
            }}
          />
        </DropdownMenuItemIndicator>
      </Box>
      {children}
    </DropdownMenuRadioItemRoot>
  ),
);

DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem';

export default DropdownMenuRadioItem;
