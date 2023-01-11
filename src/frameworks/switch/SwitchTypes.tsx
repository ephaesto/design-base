import { ComponentProps, ElementRef } from 'react';
import { Root as SwitchPrimitiveRoot } from '@radix-ui/react-switch';
import { VariantProps, CSS } from '../../../stitches.config';
import SwitchRoot from './components/SwitchRoot';

export type SwitchRef = ElementRef<typeof SwitchRoot>;
export type SwitchVariants = VariantProps<typeof SwitchRoot>;
export type ISwitchPrimitiveProps = ComponentProps<typeof SwitchPrimitiveRoot>;
export type ISwitchProps = ISwitchPrimitiveProps & SwitchVariants & { css?: CSS };
