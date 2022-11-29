import { forwardRef } from 'react';
import ContextMenuPortal from '../ContextMenuPortal';
import ContextMenuContentRoot from './components/ContextMenuContentRoot';
import { ContextMenuContentRef, IContextMenuContentProps } from './ContextMenuContentTypes';

const ContextMenuContent = forwardRef<ContextMenuContentRef, IContextMenuContentProps>(
  (props, forwardedRef): JSX.Element => (
    <ContextMenuPortal>
      <ContextMenuContentRoot {...props} ref={forwardedRef} />
    </ContextMenuPortal>
  ),
);

ContextMenuContent.displayName = 'ContextMenuContent';

export default ContextMenuContent;
