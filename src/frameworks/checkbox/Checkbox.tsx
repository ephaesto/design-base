import { ComponentProps, ElementRef, forwardRef, ReactNode } from 'react';
import { Root as CheckboxPrimitiveRoot, Indicator as CheckboxPrimitiveIndicator } from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { styled, CSS, VariantProps } from '../../../stitches.config';

const StyledCheckbox = styled(CheckboxPrimitiveRoot, {
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
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

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
        borderRadius: '$1',
      },
      '2': {
        width: '$5',
        height: '$5',
        borderRadius: '$2',
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
});

const StyledIndicator = styled(CheckboxPrimitiveIndicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
});

type CheckboxRef = ElementRef<typeof StyledCheckbox>;
type CheckboxVariants = VariantProps<typeof StyledCheckbox>;
type ICheckboxPrimitiveProps = ComponentProps<typeof CheckboxPrimitiveRoot>;
export type ICheckboxProps = ICheckboxPrimitiveProps &
  CheckboxVariants & { css?: CSS; as?: keyof JSX.IntrinsicElements | ReactNode };

const Checkbox = forwardRef<CheckboxRef, ICheckboxProps>(
  (props, forwardedRef): JSX.Element => (
    <StyledCheckbox {...props} ref={forwardedRef}>
      <StyledIndicator>
        <CheckIcon />
      </StyledIndicator>
    </StyledCheckbox>
  ),
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
