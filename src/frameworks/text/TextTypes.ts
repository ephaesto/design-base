import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Text from './Text';

export type TextRef = ElementRef<typeof Text>;
export type ITextProps = ComponentProps<typeof Text> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
