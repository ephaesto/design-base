import { ElementRef, ComponentProps, ReactNode } from 'react';
import { styled, CSS } from '../../../stitches.config';

const Sup = styled('sup', {});

export type SupRef = ElementRef<typeof Sup>;
export type ISupProps = ComponentProps<typeof Sup> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};

export default Sup;
