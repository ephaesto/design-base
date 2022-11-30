import { Story, Meta } from '@storybook/react';
import Button from '../button/Button';
import DropdownMenuComponent, {
  IDropdownMenuProps,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './index';

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
