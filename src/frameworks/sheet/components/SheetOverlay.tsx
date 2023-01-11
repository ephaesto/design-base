import { Overlay as SheetPrimitiveOverlay } from '@radix-ui/react-dialog';

import { styled } from '../../../../stitches.config';
import { overlayStyles } from '../../../css-utils';
import fadeIn from '../keyframes/fadeIn';
import fadeOut from '../keyframes/fadeOut';

const SheetOverlay = styled(SheetPrimitiveOverlay, overlayStyles, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,

  '&[data-state="open"]': {
    animation: `${fadeIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${fadeOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },
});

export default SheetOverlay;
