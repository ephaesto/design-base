import { Cross2Icon } from '@radix-ui/react-icons';
import { Story, Meta } from '@storybook/react';
import Button from '../button/Button';
import Text from '../text/Text';
import IconButton from '../icon-button/IconButton';
import PopoverComponent, { IPopoverProps, PopoverClose, PopoverContent, PopoverTrigger } from './index';

export default {
  title: 'Exemple/Popover',
  component: PopoverComponent,
} as Meta;

export const Popover: Story<IPopoverProps> = args => (
  <PopoverComponent {...args}>
    <PopoverTrigger asChild>
      <Button css={{ ml: '$4' }}>With close button</Button>
    </PopoverTrigger>
    <PopoverContent side="top" css={{ padding: '$4' }}>
      <Text>Hello, from Popover</Text>
      <PopoverClose asChild>
        <IconButton variant="ghost" css={{ position: 'absolute', top: '$1', right: '$1' }}>
          <Cross2Icon />
        </IconButton>
      </PopoverClose>
    </PopoverContent>
  </PopoverComponent>
);

Popover.args = {};
