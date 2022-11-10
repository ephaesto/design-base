import { ComponentProps, ElementRef, forwardRef } from 'react';
import { Item as RadioGroupPrimitiveItem } from '@radix-ui/react-radio-group';
import { styled, CSS } from '../../../stitches.config';

const StyledRadioButton = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$round',
  width: 25,
  height: 25,
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  flexShrink: 0,
  mr: '$3',
});

const StyledRadioIndicator = styled('div', {
  borderRadius: '$round',
  width: 15,
  height: 15,
  backgroundColor: '$blue9',
  transform: 'scale(0)',
});

const StyledRadio = styled(RadioGroupPrimitiveItem, {
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
  borderRadius: '$2',
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  p: '$3',
  '@hover': {
    '&:hover': {
      boxShadow: 'inset 0 0 0 1px $colors$slate8',
    },
  },
  '&[data-state="checked"]': {
    boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8 !important',
    [`& ${StyledRadioIndicator}`]: {
      transform: 'scale(1)',
    },
  },
});

type RadioCardRef = ElementRef<typeof StyledRadio>;
type IRadioGroupItemPrimitiveProps = ComponentProps<typeof RadioGroupPrimitiveItem>;
export type IRadioCardProps = IRadioGroupItemPrimitiveProps & { css?: CSS };

const RadioCard = forwardRef<RadioCardRef, IRadioCardProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <StyledRadio {...props} ref={forwardedRef}>
      <StyledRadioButton>
        <StyledRadioIndicator />
      </StyledRadioButton>
      {children}
    </StyledRadio>
  ),
);

RadioCard.displayName = 'RadioCard';

export default RadioCard;
