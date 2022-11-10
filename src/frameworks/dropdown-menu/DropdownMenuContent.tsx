import { ComponentProps, ElementRef, forwardRef } from 'react';
import {
  Portal as DropdownMenuPrimitivePortal,
  Content as DropdownMenuPrimitiveContent,
} from '@radix-ui/react-dropdown-menu';
import { styled, CSS } from '../../../stitches.config';
import { menuCss, panelStyles } from '../../css-utils';

const StyledContent = styled(DropdownMenuPrimitiveContent, menuCss, panelStyles);

type DropdownMenuContentRef = ElementRef<typeof StyledContent>;
type IDropdownMenuContentPrimitiveProps = ComponentProps<typeof DropdownMenuPrimitiveContent>;
type IDropdownMenuContentProps = IDropdownMenuContentPrimitiveProps & { css?: CSS };

const DropdownMenuContent = forwardRef<DropdownMenuContentRef, IDropdownMenuContentProps>(
  (props, forwardedRef): JSX.Element => (
    <DropdownMenuPrimitivePortal>
      <StyledContent {...props} ref={forwardedRef} />
    </DropdownMenuPrimitivePortal>
  ),
);

DropdownMenuContent.displayName = 'DropdownMenuContent';

export default DropdownMenuContent;
