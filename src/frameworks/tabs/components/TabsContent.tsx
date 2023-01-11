import { Content as TabsPrimitiveContent } from '@radix-ui/react-tabs';
import { styled } from '../../../../stitches.config';

const TabsContent = styled(TabsPrimitiveContent, {
  flexGrow: 1,
  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $slate8, 0 0 0 1px $slate8',
  },
});

export default TabsContent;
