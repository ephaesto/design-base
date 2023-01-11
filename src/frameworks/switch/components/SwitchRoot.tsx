import { Root as SwitchPrimitiveRoot } from '@radix-ui/react-switch';
import { styled } from '../../../../stitches.config';
import SwitchThumb from './SwitchThumb';

const SwitchRoot = styled(SwitchPrimitiveRoot, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Reset
  alignItems: 'center',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  backgroundColor: '$slate5',
  borderRadius: '$pill',
  position: 'relative',
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$slate8',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$blue9',
    '&:focus': {
      boxShadow: '0 0 0 2px $colors$blue8',
    },
  },

  variants: {
    size: {
      '1': {
        width: '$5',
        height: '$3',
      },
      '2': {
        width: '$7',
        height: '$5',
        [`& ${SwitchThumb}`]: {
          width: 21,
          height: 21,
          transform: 'translateX(2px)',
          '&[data-state="checked"]': {
            transform: 'translateX(22px)',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
});

export default SwitchRoot;
