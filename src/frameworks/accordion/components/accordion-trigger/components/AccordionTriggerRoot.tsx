import { Trigger as AccordionPrimitiveTrigger } from '@radix-ui/react-accordion';
import { styled } from '../../../../../../stitches.config';

const AccordionTriggerRoot = styled(AccordionPrimitiveTrigger, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  p: '$2',
  color: '$hiContrast',
  width: '100%',

  '@hover': {
    '&:hover': {
      backgroundColor: '$slate2',
    },
  },

  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
  },

  svg: {
    transition: 'transform 175ms cubic-bezier(0.65, 0, 0.35, 1)',
  },

  '&[data-state="open"]': {
    svg: {
      transform: 'rotate(180deg)',
    },
  },
});

export default AccordionTriggerRoot;
