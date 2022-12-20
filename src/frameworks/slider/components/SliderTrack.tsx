import { Track as SliderPrimitiveTrack } from '@radix-ui/react-slider';
import { styled } from '../../../../stitches.config';

const SliderTrack = styled(SliderPrimitiveTrack, {
  position: 'relative',
  flexGrow: 1,
  backgroundColor: '$slate7',
  borderRadius: '$pill',
  '&[data-orientation="horizontal"]': {
    height: 2,
  },
  '&[data-orientation="vertical"]': {
    width: 2,
    height: 100,
  },
});

export default SliderTrack;
