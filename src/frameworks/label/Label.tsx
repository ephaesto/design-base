import { Root as LabelPrimitiveRoot } from '@radix-ui/react-label';
import { ElementRef, ComponentProps, ReactNode } from 'react';
import { styled, CSS } from '../../../stitches.config';
import Text from '../text/Text';

export const Label = styled(LabelPrimitiveRoot, Text, {
  display: 'inline-block',
  verticalAlign: 'middle',
  cursor: 'default',
});

export type LabelRef = ElementRef<typeof Label>;
export type ILabelProps = ComponentProps<typeof Label> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};

export default Label;
