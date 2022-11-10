import { ComponentProps, ElementRef, ReactNode } from 'react';
import { styled, CSS } from '../../../stitches.config';

const Box = styled('div', {
  // Reset
  boxSizing: 'border-box',
});

export type BoxRef = ElementRef<typeof Box>;
export type IBoxProps = ComponentProps<typeof Box> & { css?: CSS; as?: keyof JSX.IntrinsicElements | ReactNode };

export default Box;
