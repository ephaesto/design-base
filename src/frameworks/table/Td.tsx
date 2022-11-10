import { styled } from '../../../stitches.config';

const Td = styled('td', {
  py: '$2',
  borderBottom: '1px solid $gray4',
  fontSize: '$2',
  variants: {
    align: {
      start: {
        textAlign: 'start',
      },
      center: {
        textAlign: 'center',
      },
      end: {
        textAlign: 'end',
      },
    },
    border: {
      solid: {
        borderBottom: '1px solid $gray4',
      },
      dashed: {
        borderBottom: '1px dashed $gray8',
      },
    },
  },
  defaultVariants: {
    align: 'start',
    border: 'solid',
  },
});

export default Td;
