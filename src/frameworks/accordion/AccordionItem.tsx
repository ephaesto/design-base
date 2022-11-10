import { Item as AccordionPrimitiveItem } from '@radix-ui/react-accordion';
import { styled } from '../../../stitches.config';

const AccordionItem = styled(AccordionPrimitiveItem, {
  borderTop: '1px solid $colors$slate6',

  '&:last-of-type': {
    borderBottom: '1px solid $colors$slate6',
  },
});

export default AccordionItem;
