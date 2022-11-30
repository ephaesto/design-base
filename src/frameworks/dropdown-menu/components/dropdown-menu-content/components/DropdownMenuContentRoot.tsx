import { Content as DropdownMenuPrimitiveContent } from '@radix-ui/react-dropdown-menu';
import { styled } from '../../../../../../stitches.config';
import { menuCss, panelStyles } from '../../../../../css-utils';

const DropdownMenuContentRoot = styled(DropdownMenuPrimitiveContent, menuCss, panelStyles);

export default DropdownMenuContentRoot;
