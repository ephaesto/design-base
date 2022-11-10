import { ComponentProps, ElementRef, ReactNode } from 'react';
import { Root as RadioGroupPrimitiveRoot } from '@radix-ui/react-radio-group';
import { styled, CSS } from '../../../stitches.config';

const RadioGroup = styled(RadioGroupPrimitiveRoot, {
  display: 'flex',
});

export type RadioGroupRef = ElementRef<typeof RadioGroup>;
export type IRadioGroupProps = ComponentProps<typeof RadioGroup> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};

export default RadioGroup;
