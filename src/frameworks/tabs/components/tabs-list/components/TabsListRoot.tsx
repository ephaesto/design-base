import { List as TabsPrimitiveList } from '@radix-ui/react-tabs';
import { styled } from '../../../../../../stitches.config';

const TabsListRoot = styled(TabsPrimitiveList, {
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

export default TabsListRoot;
