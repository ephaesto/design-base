import { Root as RadioGroupPrimitiveRoot } from '@radix-ui/react-radio-group';
import { ElementRef, ComponentProps, ReactNode } from 'react';
import { styled, CSS } from '../../../stitches.config';

const RadioGridGroup = styled(RadioGroupPrimitiveRoot, {
  display: 'grid',
  gap: '$1',
  gridTemplateColumns: 'repeat(5, 1fr)',
});

export type RadioGridGroupRef = ElementRef<typeof RadioGridGroup>;
export type RadioGridGroupProps = ComponentProps<typeof RadioGridGroup> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};

export default RadioGridGroup;
