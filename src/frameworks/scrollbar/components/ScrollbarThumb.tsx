import { styled } from '../../../../stitches.config';

const ScrollbarThumb = styled('div', {
  // Reset
  boxSizing: 'border-box',
  opacity: 0,
  zIndex: 2,
  position: 'absolute',
  top: 0,
  right: 0,
  width: '8px',
  // Fill in the thumb color
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '2px',
    left: '2px',
    width: 'calc(100% - 4px)',
    height: 'calc(100% - 4px)',
    // Match Radix hue on grays
    backgroundColor: 'hsla(206, 5%, 50%, 0.3)',
    borderRadius: '9999px',
  },
});

export default ScrollbarThumb;
