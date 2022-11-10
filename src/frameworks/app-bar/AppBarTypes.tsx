import { ComponentProps, ElementRef, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import AppBar from './AppBar';

export type AppBarRef = ElementRef<typeof AppBar>;
export type IAppBarProps = ComponentProps<typeof AppBar> & { css?: CSS; as?: keyof JSX.IntrinsicElements | ReactNode };
