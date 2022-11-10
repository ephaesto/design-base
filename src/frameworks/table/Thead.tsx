import { styled } from '../../../stitches.config';
import Td from './Td';
import Th from './Th';

export const Thead = styled('thead', {
  [`& ${Th}`]: {
    fontSize: '$1',
    color: '$gray11',
  },
  [`& ${Td}`]: {
    fontSize: '$1',
    color: '$gray11',
  },
});

export default Thead;
