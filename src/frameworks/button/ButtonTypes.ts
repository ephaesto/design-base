import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Button from './Button';

export type ButtonRef = ElementRef<typeof Button>;
export type IButtonProps = ComponentProps<typeof Button> & { css?: CSS; as?: keyof JSX.IntrinsicElements | ReactNode };
