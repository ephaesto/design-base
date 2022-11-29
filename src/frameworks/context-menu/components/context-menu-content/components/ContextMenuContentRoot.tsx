import { Content as ContextMenuPrimitiveContent } from '@radix-ui/react-context-menu';
import { styled } from '../../../../../../stitches.config';
import { menuCss, panelStyles } from '../../../../../css-utils';

const ContextMenuContentRoot = styled(ContextMenuPrimitiveContent, menuCss, panelStyles);

export default ContextMenuContentRoot;
