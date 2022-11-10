import { Story, Meta } from '@storybook/react';
import Button from '../button/Button';
import For from '../../utils/For';
import AppBarComponent, { IAppBarProps } from './AppBar';

export default {
  title: 'Exemple/AppBar',
  component: AppBarComponent,
} as Meta;

export const AppBar: Story<IAppBarProps> = args => (
  <AppBarComponent {...args}>
    <For inValues={[1, 2, 3, 4]}>
      {(_, uuid) => (
        <Button key={uuid} css={{ mr: 6 }}>
          Button
        </Button>
      )}
    </For>
  </AppBarComponent>
);

AppBar.args = {
  size: '2',
  color: 'loContrast',
  border: true,
  sticky: true,
  glass: true,
};
