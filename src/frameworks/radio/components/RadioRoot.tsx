import { Item as RadioPrimitiveRoot } from '@radix-ui/react-radio-group';
import { styled } from '../../../../stitches.config';
import RadioIndicator from './RadioIndicator';

const RadioRoot = styled(RadioPrimitiveRoot, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  alignItems: 'center',
  appearance: 'none',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  borderRadius: '50%',
  color: '$hiContrast',
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  overflow: 'hidden',
  '@hover': {
    '&:hover': {
      boxShadow: 'inset 0 0 0 1px $colors$slate8',
    },
  },
  '&:focus': {
    outline: 'none',
    borderColor: '$red7',
    boxShadow: 'inset 0 0 0 1px $colors$blue9, 0 0 0 1px $colors$blue9',
  },

  variants: {
    size: {
      '1': {
        width: '$3',
        height: '$3',
      },
      '2': {
        width: '$5',
        height: '$5',

        [`& ${RadioIndicator}`]: {
          '&::after': {
            width: '$3',
            height: '$3',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
});

export default RadioRoot;