import { ElementRef, ComponentProps, ReactNode } from 'react';
import { styled, CSS } from '../../../stitches.config';
import { overlayStyles } from '../../css-utils';

const Overlay = styled('div', overlayStyles);

export type OverlayRef = ElementRef<typeof Overlay>;
export type IOverlayProps = ComponentProps<typeof Overlay> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};

export default Overlay;
