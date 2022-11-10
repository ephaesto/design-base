import { CodeIcon } from '@radix-ui/react-icons';
import { Story, Meta } from '@storybook/react';
import Box from '../box/Box';
import TabLinkComponent, { ITabLinkProps } from './TabLink';

export default {
  title: 'Exemple/TabLink',
  component: TabLinkComponent,
} as Meta;

export const TabLink: Story<ITabLinkProps> = args => (
  <TabLinkComponent {...args} href="#">
    <Box css={{ mr: '$1' }}>
      <CodeIcon />
    </Box>
    Code
  </TabLinkComponent>
);

TabLink.args = {};
