import { VariantProps } from '@stitches/react';
import { ComponentProps, ElementRef, ReactNode } from 'react';
import { Root as AvatarPrimitiveRoot } from '@radix-ui/react-avatar';
import Status from '../status/Status';
import { CSS } from '../../../stitches.config';
import AvatarRoot from './components/AvatarRoot';

export type StatusVariants = ComponentProps<typeof Status>;
export type StatusColors = Pick<StatusVariants, 'variant'>;

export type AvatarVariants = VariantProps<typeof AvatarRoot>;
export type AvatarRef = ElementRef<typeof AvatarRoot>;
export type IAvatarPrimitiveProps = ComponentProps<typeof AvatarPrimitiveRoot>;
export type IAvatarProps = IAvatarPrimitiveProps &
  AvatarVariants & {
    css?: CSS;
    alt?: string;
    src?: string;
    fallback?: ReactNode;
    status?: StatusColors['variant'];
    as?: keyof JSX.IntrinsicElements | ReactNode;
  };
