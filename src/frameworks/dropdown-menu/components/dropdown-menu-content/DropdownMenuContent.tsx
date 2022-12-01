import { ComponentProps, ElementRef, forwardRef } from 'react';
import { Content as DropdownMenuPrimitiveContent } from '@radix-ui/react-dropdown-menu';
import { CSS } from '../../../../../stitches.config';
import DropdownMenuContentRoot from './components/DropdownMenuContentRoot';
import DropdownMenuPortal from '../DropdownMenuPortal';

type DropdownMenuContentRef = ElementRef<typeof DropdownMenuContentRoot>;
type IDropdownMenuContentPrimitiveProps = ComponentProps<typeof DropdownMenuPrimitiveContent>;
type IDropdownMenuContentProps = IDropdownMenuContentPrimitiveProps & { css?: CSS };

const DropdownMenuContent = forwardRef<DropdownMenuContentRef, IDropdownMenuContentProps>(
  (props, forwardedRef): JSX.Element => (
    <DropdownMenuPortal>
      <DropdownMenuContentRoot {...props} ref={forwardedRef} />
    </DropdownMenuPortal>
  ),
);

DropdownMenuContent.displayName = 'DropdownMenuContent';

export default DropdownMenuContent;
