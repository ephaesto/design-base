import { Item as RadioGroupPrimitiveItem } from '@radix-ui/react-radio-group';
import { ElementRef, ComponentProps, ReactNode } from 'react';
import { styled, CSS } from '../../../stitches.config';

const RadioGrid = styled(RadioGroupPrimitiveItem, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  textAlign: 'center',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  borderRadius: '$2',
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  px: '$1',
  height: '$6',
  lineHeight: '$sizes$6',
  fontSize: '$3',
  '@hover': {
    '&:hover': {
      boxShadow: 'inset 0 0 0 1px $colors$slate8',
    },
  },
  '&[data-state="checked"]': {
    boxShadow: 'inset 0 0 0 1px $colors$slate8',
    backgroundColor: '$slate4',
  },
});

export type RadioGridRef = ElementRef<typeof RadioGrid>;
export type IRadioGridProps = ComponentProps<typeof RadioGrid> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};

export default RadioGrid;
