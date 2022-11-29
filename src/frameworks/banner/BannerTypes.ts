import { ComponentProps, ElementRef, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Banner from './Banner';

export type BannerRef = ElementRef<typeof Banner>;
export type IBannerProps = ComponentProps<typeof Banner> & { css?: CSS; as?: keyof JSX.IntrinsicElements | ReactNode };
