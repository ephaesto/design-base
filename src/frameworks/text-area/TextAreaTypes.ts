import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import TextArea from './TextArea';

export type TextAreaRef = ElementRef<typeof TextArea>;
export type ITextAreaProps = ComponentProps<typeof TextArea> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
