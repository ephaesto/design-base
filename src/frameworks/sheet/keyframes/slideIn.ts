import { keyframes } from '../../../../stitches.config';

const slideIn = keyframes({
  from: { transform: '$$transformValue' },
  to: { transform: 'translate3d(0,0,0)' },
});

export default slideIn;
