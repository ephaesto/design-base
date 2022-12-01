import { ComponentProps, ElementRef } from 'react';
import { CheckboxItem as MenuPrimitiveCheckboxItem } from '@radix-ui/react-menu';

import { CSS } from '../../../../../stitches.config';

import MenuCheckboxItemRoot from './components/MenuCheckboxItemRoot';

export type MenuCheckboxItemRef = ElementRef<typeof MenuCheckboxItemRoot>;
export type IMenuCheckboxItemPrimitiveProps = ComponentProps<typeof MenuPrimitiveCheckboxItem>;
export type IMenuCheckboxItemProps = IMenuCheckboxItemPrimitiveProps & { css?: CSS };
