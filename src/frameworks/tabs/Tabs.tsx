import { Root as TabsPrimitiveRoot } from '@radix-ui/react-tabs';
import { styled } from '../../../stitches.config';

const Tabs = styled(TabsPrimitiveRoot, {
  display: 'flex',
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
  },
});

export default Tabs;
