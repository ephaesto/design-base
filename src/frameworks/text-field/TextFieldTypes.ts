import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import TextField from './TextField';

export type TextFieldRef = ElementRef<typeof TextField>;
export type ITextFieldProps = ComponentProps<typeof TextField> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
