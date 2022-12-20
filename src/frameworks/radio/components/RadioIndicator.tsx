import { Indicator as RadioPrimitiveIndicator } from '@radix-ui/react-radio-group';
import { styled } from '../../../../stitches.config';

const RadioIndicator = styled(RadioPrimitiveIndicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: '$blue9',
  },
});

export default RadioIndicator;
