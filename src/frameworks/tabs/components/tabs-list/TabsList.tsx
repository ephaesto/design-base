import { forwardRef } from 'react';
import Separator from '../../../separator/Separator';
import TabsListRoot from './components/TabsListRoot';
import { ITabsListProps, TabsListRef } from './TabsListTypes';

const TabsList = forwardRef<TabsListRef, ITabsListProps>(
  (props, forwardedRef): JSX.Element => (
    <>
      <TabsListRoot {...props} ref={forwardedRef} />
      <Separator />
    </>
  ),
);

TabsList.displayName = 'TabsList';

export default TabsList;
