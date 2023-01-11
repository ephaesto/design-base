import { ComponentProps, ElementRef } from 'react';
import { Root as SliderPrimitiveRoot } from '@radix-ui/react-slider';
import { CSS } from '../../../stitches.config';
import { SliderRoot } from './components/SliderRoot';

export type SliderRef = ElementRef<typeof SliderRoot>;
export type ISliderPrimitiveProps = ComponentProps<typeof SliderPrimitiveRoot>;
export type ISliderProps = ISliderPrimitiveProps & {
  css?: CSS;
  defaultValue?: number[];
  value?: number[] | undefined;
};
