import { Root as RadioGroupPrimitiveRoot } from '@radix-ui/react-radio-group';
import { ElementRef, ComponentProps, ReactNode } from 'react';
import { styled, CSS } from '../../../stitches.config';

const RadioCardGroup = styled(RadioGroupPrimitiveRoot, {
  display: 'block',
});

export type RadioCardGroupRef = ElementRef<typeof RadioCardGroup>;
export type RadioCardGroupProps = ComponentProps<typeof RadioCardGroup> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};

export default RadioCardGroup;
