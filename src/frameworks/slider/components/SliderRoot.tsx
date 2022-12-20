import { Root as SliderPrimitiveRoot } from '@radix-ui/react-slider';
import { styled } from '../../../../stitches.config';
import SliderThumb from './SliderThumb';
import SliderTrack from './SliderTrack';

export const SliderRoot = styled(SliderPrimitiveRoot, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  userSelect: 'none',
  touchAction: 'none',
  height: 15,
  flexGrow: 1,

  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: 15,
  },

  '@hover': {
    '&:hover': {
      [`& ${SliderTrack}`]: {
        backgroundColor: '$slate8',
      },
      [`& ${SliderThumb}`]: {
        opacity: '1',
      },
    },
  },
});

export default SliderRoot;
