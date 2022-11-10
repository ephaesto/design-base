import { ElementRef, ComponentProps, ReactNode } from 'react';
import { styled, CSS } from '../../../stitches.config';

const Sub = styled('sub', {});

export type SubRef = ElementRef<typeof Sub>;
export type ISubProps = ComponentProps<typeof Sub> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};

export default Sub;
