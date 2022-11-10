import { Story, Meta } from '@storybook/react';
import { DesignSystemProvider } from '../../providers/DesignSystemProvider';
import Button from '../button/Button';
import Text from '../text/Text';
import Tooltip from '../tooltip/Tooltip';
import DialogComponent, { IDialogProps } from './Dialog';
import DialogClose from './DialogClose';
import DialogContent from './DialogContent';
import DialogTrigger from './DialogTrigger';

export default {
  title: 'Exemple/Dialog',
  component: DialogComponent,
} as Meta;

export const Dialog: Story<IDialogProps> = args => (
  <DesignSystemProvider>
    <DialogComponent {...args}>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <Text css={{ mb: '$4' }}>Hello, from Dialog</Text>
        <Tooltip content="You get the idea." side="left">
          <Button css={{ ml: '$4' }}>Left</Button>
        </Tooltip>
        <DialogClose asChild>
          <Button>Bye.</Button>
        </DialogClose>
      </DialogContent>
    </DialogComponent>
  </DesignSystemProvider>
);
Dialog.args = {};
