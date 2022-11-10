import { ComponentProps, ElementRef, ReactNode } from 'react';
import { styled, CSS } from '../../../stitches.config';
import { panelStyles } from '../../css-utils';

const Panel = styled('div', panelStyles);

export type PanelRef = ElementRef<typeof Panel>;
export type IPanelProps = ComponentProps<typeof Panel> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};

export default Panel;
