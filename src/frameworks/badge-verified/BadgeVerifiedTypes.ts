import { ComponentProps, ElementRef, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import BadgeVerifiedRoot from './components/BadgeVerifiedRoot';

export type BadgeVerifiedRef = ElementRef<typeof BadgeVerifiedRoot>;
export type IBadgeVerifiedProps = ComponentProps<typeof BadgeVerifiedRoot> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
