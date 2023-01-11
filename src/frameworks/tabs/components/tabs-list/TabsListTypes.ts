import { ComponentProps, ElementRef } from 'react';
import { List as TabsPrimitiveList } from '@radix-ui/react-tabs';
import { CSS } from '../../../../../stitches.config';
import TabsListRoot from './components/TabsListRoot';

export type TabsListRef = ElementRef<typeof TabsListRoot>;
export type ITabsListPrimitiveProps = ComponentProps<typeof TabsPrimitiveList>;
export type ITabsListProps = ITabsListPrimitiveProps & { css?: CSS };
