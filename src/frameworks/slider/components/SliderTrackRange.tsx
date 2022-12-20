import { Range as SliderPrimitiveTrackRange } from '@radix-ui/react-slider';
import { styled } from '../../../../stitches.config';

const SliderTrackRange = styled(SliderPrimitiveTrackRange, {
  position: 'absolute',
  background: '$blue9',
  borderRadius: 'inherit',
  '&[data-orientation="horizontal"]': {
    height: '100%',
  },
  '&[data-orientation="vertical"]': {
    width: '100%',
  },
});

export default SliderTrackRange;
