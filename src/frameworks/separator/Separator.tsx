import { Root as SeparatorPrimitiveRoot } from '@radix-ui/react-separator';
import { styled } from '../../../stitches.config';

const Separator = styled(SeparatorPrimitiveRoot, {
  border: 'none',
  margin: 0,
  flexShrink: 0,
  backgroundColor: '$slate6',
  cursor: 'default',

  variants: {
    size: {
      '1': {
        '&[data-orientation="horizontal"]': {
          height: '1px',
          width: '$3',
        },

        '&[data-orientation="vertical"]': {
          width: '1px',
          height: '$3',
        },
      },
      '2': {
        '&[data-orientation="horizontal"]': {
          height: '1px',
          width: '$7',
        },

        '&[data-orientation="vertical"]': {
          width: '1px',
          height: '$7',
        },
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
});

export default Separator;
