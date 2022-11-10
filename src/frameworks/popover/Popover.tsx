import { Root as PopoverPrimitiveRoot } from '@radix-ui/react-popover';
import { ElementRef, ComponentProps, ReactNode } from 'react';
import { styled, CSS } from '../../../stitches.config';

const Popover = styled(PopoverPrimitiveRoot, {});

export type PopoverRef = ElementRef<typeof Popover>;
export type IPopoverProps = ComponentProps<typeof Popover> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};

export default Popover;
