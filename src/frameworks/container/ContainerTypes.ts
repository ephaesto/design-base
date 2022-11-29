import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Container from './Container';

export type ContainerRef = ElementRef<typeof Container>;
export type IContainerProps = ComponentProps<typeof Container> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
