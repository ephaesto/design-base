import { styled } from '../../../../stitches.config';

const SelectWrapper = styled('div', {
  backgroundColor: '$loContrast',
  borderRadius: '$2',
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  color: '$hiContrast',
  fontFamily: '$untitled',
  fontSize: '$1',
  fontVariantNumeric: 'tabular-nums',
  fontWeight: 400,
  height: '$5',
  flexShrink: 0,

  '&:focus-within': {
    zIndex: 1,
    boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
  },
});

export default SelectWrapper;
