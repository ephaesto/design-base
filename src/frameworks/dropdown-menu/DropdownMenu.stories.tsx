import { Story, Meta } from '@storybook/react';
import Button from '../button/Button';
import DropdownMenuComponent, { IDropdownMenuProps } from './DropdownMenu';
import DropdownMenuCheckboxItem from './DropdownMenuCheckboxItem';
import DropdownMenuContent from './DropdownMenuContent';
import DropdownMenuGroup from './DropdownMenuGroup';
import DropdownMenuItem from './DropdownMenuItem';
import DropdownMenuLabel from './DropdownMenuLabel';
import DropdownMenuRadioGroup from './DropdownMenuRadioGroup';
import DropdownMenuRadioItem from './DropdownMenuRadioItem';
import DropdownMenuSeparator from './DropdownMenuSeparator';
import DropdownMenuTrigger from './DropdownMenuTrigger';

export default {
  title: 'Exemple/DropdownMenu',
  component: DropdownMenuComponent,
} as Meta;

export const DropdownMenu: Story<IDropdownMenuProps> = args => (
  <DropdownMenuComponent {...args}>
    <DropdownMenuTrigger asChild>
      <Button>Dropdown</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuGroup>
        <DropdownMenuItem>Item</DropdownMenuItem>
        <DropdownMenuItem>Item</DropdownMenuItem>
        <DropdownMenuItem>Item</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem>Item</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked>Item</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Item</DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Choose one</DropdownMenuLabel>
        <DropdownMenuRadioGroup value="one">
          <DropdownMenuRadioItem value="one">Item</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="two">Item</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="three">Item</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenuComponent>
);

DropdownMenu.args = {};
