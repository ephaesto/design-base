import { ComponentProps, ElementRef, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Box from './Box';

export type BoxRef = ElementRef<typeof Box>;
export type IBoxProps = ComponentProps<typeof Box> & { css?: CSS; as?: keyof JSX.IntrinsicElements | ReactNode };
