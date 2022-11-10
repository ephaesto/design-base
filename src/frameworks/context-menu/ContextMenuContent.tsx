import { ComponentProps, ElementRef, forwardRef } from 'react';
import {
  Content as ContextMenuPrimitiveContent,
  Portal as ContextMenuPrimitivePortal,
} from '@radix-ui/react-context-menu';
import { styled, CSS } from '../../../stitches.config';
import { menuCss, panelStyles } from '../../css-utils';

const StyledContent = styled(ContextMenuPrimitiveContent, menuCss, panelStyles);

type ContextMenuContentRef = ElementRef<typeof StyledContent>;
type IContextMenuContentPrimitiveProps = ComponentProps<typeof ContextMenuPrimitiveContent>;
type IContextMenuContentProps = IContextMenuContentPrimitiveProps & { css?: CSS };

const ContextMenuContent = forwardRef<ContextMenuContentRef, IContextMenuContentProps>(
  (props, forwardedRef): JSX.Element => (
    <ContextMenuPrimitivePortal>
      <StyledContent {...props} ref={forwardedRef} />
    </ContextMenuPrimitivePortal>
  ),
);

ContextMenuContent.displayName = 'ContextMenuContent';

export default ContextMenuContent;
