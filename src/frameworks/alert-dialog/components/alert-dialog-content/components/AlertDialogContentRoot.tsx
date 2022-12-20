import { Content as AlertDialogPrimitiveContent } from '@radix-ui/react-alert-dialog';
import { styled } from '../../../../../../stitches.config';
import { panelStyles } from '../../../../../css-utils';

const AlertDialogContentRoot = styled(AlertDialogPrimitiveContent, panelStyles, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxHeight: '85vh',
  padding: '$4',
  marginTop: '-5vh',

  '&:focus': {
    outline: 'none',
  },
});

export default AlertDialogContentRoot;
