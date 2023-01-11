import { Close as SheetPrimitiveClose } from '@radix-ui/react-dialog';
import { styled } from '../../../../stitches.config';

const SheetCloseButton = styled(SheetPrimitiveClose, {
  position: 'absolute',
  top: '$2',
  right: '$2',
});

export default SheetCloseButton;
