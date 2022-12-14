import { Story, Meta } from '@storybook/react';
import Box from '../box/Box';
import MenuComponent, {
  IMenuProps,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
} from './index';

export default {
  title: 'Exemple/Menu',
  component: MenuComponent,
} as Meta;

export const Menu: Story<IMenuProps> = args => (
  <Box
    css={{
      '& [data-radix-popper-content-wrapper]': {
        transform: 'none!important',
        left: '40%!important',
        top: '30%!important',
      },
    }}
  >
    <MenuComponent {...args} open onOpenChange={() => {}} css={{ transform: 'none' }}>
      <MenuContent>
        <MenuGroup>
          <MenuLabel>Cut</MenuLabel>
          <MenuItem>Cut</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Paste</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuRadioGroup>
          <MenuRadioItem value="Forward">Forward</MenuRadioItem>
          <MenuRadioItem value="Backward">Backward</MenuRadioItem>
          <MenuRadioItem value="Vertically">Vertically</MenuRadioItem>
        </MenuRadioGroup>
      </MenuContent>
    </MenuComponent>
  </Box>
);

Menu.args = {};
