import { Story, Meta } from '@storybook/react';
import Box from '../box/Box';
import ScrollbarComponent, { IScrollbarProps } from './Scrollbar';

export default {
  title: 'Exemple/Scrollbar',
  component: ScrollbarComponent,
} as Meta;

export const Scrollbar: Story<IScrollbarProps> = args => (
  <Box css={{ backgroundColor: '#f7f7f7', width: '4rem', height: '6rem' }}>
    <ScrollbarComponent {...args}>
      <Box css={{ backgroundColor: '#f7f7f7', width: '4rem', height: '6rem' }} />
      <Box css={{ backgroundColor: '#f7f7f7', width: '4rem', height: '6rem' }} />
    </ScrollbarComponent>
  </Box>
);

Scrollbar.args = {};
