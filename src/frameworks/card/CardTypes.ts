import { ComponentProps, ElementRef, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Card from './Card';

export type CardRef = ElementRef<typeof Card>;
export type ICardProps = ComponentProps<typeof Card> & { css?: CSS; as?: keyof JSX.IntrinsicElements | ReactNode };
