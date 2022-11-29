import { forwardRef } from 'react';

const ContextMenuContent = forwardRef<ContextMenuContentRef, IContextMenuContentProps>(
  (props, forwardedRef): JSX.Element => (
    <ContextMenuPortal>
      <ContextMenuContentRoot {...props} ref={forwardedRef} />
    </ContextMenuPortal>
  ),
);

ContextMenuContent.displayName = 'ContextMenuContent';

export default ContextMenuContent;
