import { ElementRef, ComponentProps, ReactNode } from 'react';
import Alert from './Alert';
import { CSS } from '../../../stitches.config';

export type AlertRef = ElementRef<typeof Alert>;
export type IAlertProps = ComponentProps<typeof Alert> & { css?: CSS; as?: keyof JSX.IntrinsicElements | ReactNode };
