import { Root as MenuPrimitiveRoot } from '@radix-ui/react-menu';
import { ElementRef, ComponentProps, ReactNode } from 'react';
import { styled, CSS } from '../../../stitches.config';
import { menuCss } from '../../css-utils';

const Menu = styled(MenuPrimitiveRoot, menuCss);

export type MenuRef = ElementRef<typeof Menu>;
export type IMenuProps = ComponentProps<typeof Menu> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};

export default Menu;
