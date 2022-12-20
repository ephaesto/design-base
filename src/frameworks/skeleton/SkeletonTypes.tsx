import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Skeleton from './Skeleton';

export type SkeletonRef = ElementRef<typeof Skeleton>;
export type ISkeletonProps = ComponentProps<typeof Skeleton> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
