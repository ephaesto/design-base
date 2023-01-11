import { styled } from '../../../../stitches.config';

const Th = styled('th', {
  fontWeight: 'unset',
  textAlign: 'start',
  fontSize: '$2',
  py: '$2',
  borderBottom: '1px solid $gray4',
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

export default Th;
