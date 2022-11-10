import { Story, Meta } from '@storybook/react';
import AlertDialogComponent, { IAlertDialogProps } from './AlertDialog';
import Text from '../text/Text';
import AlertDialogTrigger from './AlertDialogTrigger';
import Button from '../button/Button';
import AlertDialogContent from './AlertDialogContent';
import AlertDialogTitle from './AlertDialogTitle';
import AlertDialogAction from './AlertDialogAction';
import Box from '../box/Box';
import AlertDialogCancel from './AlertDialogCancel';

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
