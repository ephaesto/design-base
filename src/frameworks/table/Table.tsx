import { styled } from '../../../stitches.config';
import Tbody from './components/Tbody';
import Tr from './components/Tr';

const Table = styled('table', {
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

export default Table;
