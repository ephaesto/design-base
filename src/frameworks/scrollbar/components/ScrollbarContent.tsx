import { styled } from '../../../../stitches.config';

const ScrollbarContent = styled('div', {
  // Reset
  boxSizing: 'border-box',
  WebkitOverflowScrolling: 'touch',
  position: 'relative',
  overflow: 'scroll',
  scrollbarWidth: 'none',
  zIndex: 1,
  '&::-webkit-scrollbar': { display: 'none' },
});

export default ScrollbarContent;
