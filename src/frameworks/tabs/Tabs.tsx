import { Root as TabsPrimitiveRoot } from '@radix-ui/react-tabs';
import { ElementRef, ComponentProps, ReactNode } from 'react';
import { styled, CSS } from '../../../stitches.config';

const Tabs = styled(TabsPrimitiveRoot, {
  display: 'flex',
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
  },
});

export type TabsRef = ElementRef<typeof Tabs>;
export type ITabsProps = ComponentProps<typeof Tabs> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};

export default Tabs;
