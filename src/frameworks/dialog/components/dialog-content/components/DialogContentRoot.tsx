import { Content as DialogPrimitiveContent } from '@radix-ui/react-dialog';
import { styled } from '../../../../../../stitches.config';
import { panelStyles } from '../../../../../css-utils';
import DialogClose from '../../DialogClose';
import DialogOverlay from '../../DialogOverlay';

const DialogContentRoot = styled(DialogPrimitiveContent, panelStyles, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxHeight: '85vh',
  padding: '$4',
  marginTop: '-5vh',
  willChange: 'transform',

  '&:focus': {
    outline: 'none',
  },
  [`& ${DialogClose}`]: {
    position: 'absolute',
    top: '$2',
    right: '$2',
  },
  [`& ${DialogOverlay}`]: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

export default DialogContentRoot;
