import { keyframes } from '../../../../stitches.config';

const slideOut = keyframes({
  from: { transform: 'translate3d(0,0,0)' },
  to: { transform: '$$transformValue' },
});

export default slideOut;
