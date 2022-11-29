import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Code from './Code';

export type CodeRef = ElementRef<typeof Code>;
export type ICodeProps = ComponentProps<typeof Code> & { css?: CSS; as?: keyof JSX.IntrinsicElements | ReactNode };
