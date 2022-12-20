import { Indicator as ProgressPrimitiveIndicator } from '@radix-ui/react-progress';
import { styled } from '../../../../stitches.config';

const ProgressBarIndicator = styled(ProgressPrimitiveIndicator, {
  boxSizing: 'border-box',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '$slate4',
  transition: 'transform 150ms cubic-bezier(0.65, 0, 0.35, 1)',
});

export default ProgressBarIndicator;
