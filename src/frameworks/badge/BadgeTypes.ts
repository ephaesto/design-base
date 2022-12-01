import { ComponentProps, ElementRef, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Badge from './Badge';

export type BadgeRef = ElementRef<typeof Badge>;
export type IBadgeProps = ComponentProps<typeof Badge> & { css?: CSS; as?: keyof JSX.IntrinsicElements | ReactNode };
