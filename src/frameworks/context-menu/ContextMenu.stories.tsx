import { Story, Meta } from '@storybook/react';
import Box from '../box/Box';
import Text from '../text/Text';
import ContextMenuComponent, {
  IContextMenuProps,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from './index';

export default {
  title: 'Exemple/ContextMenu',
  component: ContextMenuComponent,
} as Meta;

export const ContextMenu: Story<IContextMenuProps> = args => (
  <ContextMenuComponent {...args}>
    <ContextMenuTrigger>
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '$9',
          bc: '$slate2',
          border: '2px dashed $colors$slate6',
          br: '$2',
        }}
      >
        <Text variant="gray">Right-click me</Text>
      </Box>
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuGroup>
        <ContextMenuItem>Item</ContextMenuItem>
        <ContextMenuItem>Item</ContextMenuItem>
        <ContextMenuItem>Item</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem>Item</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem checked>Item</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Item</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>Choose one</ContextMenuLabel>
        <ContextMenuRadioGroup value="one">
          <ContextMenuRadioItem value="one">Item</ContextMenuRadioItem>
          <ContextMenuRadioItem value="two">Item</ContextMenuRadioItem>
          <ContextMenuRadioItem value="three">Item</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuGroup>
    </ContextMenuContent>
  </ContextMenuComponent>
);

ContextMenu.args = {};
