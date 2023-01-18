import { forwardRef } from 'react';
import Divider from '../../../divider/Divider';
import TabsListRoot from './components/TabsListRoot';
import { ITabsListProps, TabsListRef } from './TabsListTypes';

const TabsList = forwardRef<TabsListRef, ITabsListProps>(
  (props, forwardedRef): JSX.Element => (
    <>
      <TabsListRoot {...props} ref={forwardedRef} />
      <Divider />
    </>
  ),
);

TabsList.displayName = 'TabsList';

export default TabsList;
