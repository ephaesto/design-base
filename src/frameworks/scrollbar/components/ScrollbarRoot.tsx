import { styled } from '../../../../stitches.config';
import ScrollbarContent from './ScrollbarContent';
import ScrollbarThumb from './ScrollbarThumb';

const ScrollbarRoot = styled('div', {
  // Reset
  boxSizing: 'border-box',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  minHeight: 0,
  maxHeight: '100%',
  position: 'relative',
  // This bit shows the thumb when you hover the wrapper
  '&:hover': {
    [`${ScrollbarThumb}`]: {
      opacity: 1,
    },
  },
  '&.workos-is-dragging': {
    // Need to keep pointer events when scrolling so thumb isn't hidden immediately after scroll
    pointerEvents: 'auto',
    // But still remove pointer events from content
    [`${ScrollbarContent}`]: {
      pointerEvents: 'none',
    },
    // Need to always keep the thumb visible when scrolling, even if the mouse leaves the wrapper
    [`${ScrollbarThumb}`]: {
      opacity: 1,
    },
  },
});

export default ScrollbarRoot;
