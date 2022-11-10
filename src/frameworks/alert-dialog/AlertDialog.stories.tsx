import { Story, Meta } from '@storybook/react';
import AlertDialogComponent, {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
  IAlertDialogProps,
} from './index';
import Text from '../text/Text';
import Box from '../box/Box';
import Button from '../button/Button';

export default {
  title: 'Exemple/AlertDialog',
  component: AlertDialogComponent,
} as Meta;

export const AlertDialog: Story<IAlertDialogProps> = () => (
  <AlertDialogComponent>
    <AlertDialogTrigger asChild>
      <Button>Open AlertDialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogTitle asChild>
        <Text css={{ mb: '$4' }}>Hello, from AlertDialog</Text>
      </AlertDialogTitle>
      <Box css={{ justifyContent: 'space-between' }}>
        <AlertDialogAction asChild>
          <Button>Ok</Button>
        </AlertDialogAction>
        <AlertDialogCancel asChild>
          <Button variant="red">Cancel</Button>
        </AlertDialogCancel>
      </Box>
    </AlertDialogContent>
  </AlertDialogComponent>
);

AlertDialog.args = {};
