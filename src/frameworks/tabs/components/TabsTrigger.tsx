import { Trigger as TabsPrimitiveTrigger } from '@radix-ui/react-tabs';
import { styled } from '../../../../stitches.config';

const TabsTrigger = styled(TabsPrimitiveTrigger, {
  flexShrink: 0,
  height: '$5',
  display: 'inline-flex',
  lineHeight: 1,
  fontSize: '$1',
  px: '$2',
  userSelect: 'none',
  outline: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$slate11',
  border: '1px solid transparent',
  borderTopLeftRadius: '$2',
  borderTopRightRadius: '$2',
  zIndex: '10',

  '@hover': {
    '&:hover': {
      color: '$hiContrast',
    },
  },

  '&[data-state="active"]': {
    color: '$hiContrast',
    borderColor: '$slate6',
    borderBottomColor: 'transparent',
  },

  '&[data-orientation="vertical"]': {
    justifyContent: 'flex-start',
    borderTopRightRadius: 0,
    borderBottomLeftRadius: '$2',
    borderBottomColor: 'transparent',

    '&[data-state="active"]': {
      borderBottomColor: '$slate6',
      borderRightColor: 'transparent',
    },
  },
});

export default TabsTrigger;
