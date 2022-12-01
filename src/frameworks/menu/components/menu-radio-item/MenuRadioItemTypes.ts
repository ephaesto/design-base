import { ComponentProps, ElementRef } from 'react';
import { RadioItem as MenuPrimitiveRadioItem } from '@radix-ui/react-menu';
import { CSS } from '../../../../../stitches.config';
import MenuRadioItemRoot from './components/MenuRadioItemRoot';

export type MenuRadioItemRef = ElementRef<typeof MenuRadioItemRoot>;
export type IMenuRadioItemPrimitiveProps = ComponentProps<typeof MenuPrimitiveRadioItem>;
export type IMenuRadioItemProps = IMenuRadioItemPrimitiveProps & { css?: CSS };
