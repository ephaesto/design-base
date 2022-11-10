import { ComponentProps, ElementRef, forwardRef } from 'react';
import { List as TabsPrimitiveList } from '@radix-ui/react-tabs';
import { styled, CSS } from '../../../stitches.config';
import Separator from '../separator/Separator';

const StyledTabsList = styled(TabsPrimitiveList, {
  flexShrink: 0,
  display: 'flex',
  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $slate8, 0 0 0 1px $slate8',
  },
  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    boxShadow: 'inset -1px 0 0 $slate6',
  },
});

type TabsListRef = ElementRef<typeof StyledTabsList>;
type ITabsListPrimitiveProps = ComponentProps<typeof TabsPrimitiveList>;
type ITabsListProps = ITabsListPrimitiveProps & { css?: CSS };

const TabsList = forwardRef<TabsListRef, ITabsListProps>(
  (props, forwardedRef): JSX.Element => (
    <>
      <StyledTabsList {...props} ref={forwardedRef} />
      <Separator />
    </>
  ),
);

TabsList.displayName = 'TabsList';

export default TabsList;
