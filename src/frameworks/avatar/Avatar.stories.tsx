import { Story, Meta } from '@storybook/react';
import For from '../../utils/For';
import Box from '../box/Box';
import AvatarComponent, { IAvatarProps } from './Avatar';

export default {
  title: 'Exemple/Avatar',
  component: AvatarComponent,
} as Meta;

export const Avatar: Story<IAvatarProps> = args => (
  <Box css={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
    <For inValues={[1, 2, 3, 4]}>
      {size => <AvatarComponent key={`one${size}`} size={size} {...args} css={{ mr: 6 }} />}
    </For>
  </Box>
);

Avatar.args = {
  shape: 'circle',
  alt: 'Colm Tuite',
  src: 'https://i.picsum.photos/id/884/200/200.jpg?hmac=BEameeYahafzsG-UCcyxl-la3nd2GolgYlQgWpd5krk',
  fallback: 'C',
};
