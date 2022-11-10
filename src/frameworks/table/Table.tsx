import { ElementRef, ComponentProps, ReactNode } from 'react';
import { styled, CSS } from '../../../stitches.config';
import Tbody from './Tbody';
import Tr from './Tr';

export const Table = styled('table', {
  width: '100%',
  tableLayout: 'fixed',
  borderSpacing: 0,
  variants: {
    striped: {
      true: {
        [`& ${Tbody}`]: {
          [`& ${Tr}`]: {
            '&:nth-child(odd)': {
              bc: '$gray2',
            },
          },
        },
      },
    },
  },
});

export type TableRef = ElementRef<typeof Table>;
export type ITableProps = ComponentProps<typeof Table> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};

export default Table;
