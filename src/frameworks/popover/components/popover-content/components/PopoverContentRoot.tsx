import { Content as PopoverPrimitiveContent } from '@radix-ui/react-popover';
import { styled } from '../../../../../../stitches.config';
import { panelStyles } from '../../../../../css-utils';

const PopoverContentRoot = styled(PopoverPrimitiveContent, panelStyles, {
  minWidth: 200,
  minHeight: '$6',
  maxWidth: 265,
  '&:focus': {
    outline: 'none',
  },
});

export default PopoverContentRoot;
