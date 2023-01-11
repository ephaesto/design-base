import { Content as TooltipPrimitiveContent } from '@radix-ui/react-tooltip';
import { styled } from '../../../../stitches.config';

const TooltipContent = styled(TooltipPrimitiveContent, {
  backgroundColor: '$transparentPanel',
  borderRadius: '$1',
  padding: '$1 $2',

  variants: {
    multiline: {
      true: {
        maxWidth: 250,
        pb: 7,
      },
    },
  },
});

export default TooltipContent;
