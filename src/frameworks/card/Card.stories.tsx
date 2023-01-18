import { Story, Meta } from '@storybook/react';
import CardComponent, { ICardProps } from './index';
import Text from '../text/Text';
import Image from '../image/Image';
import Box from '../box';

export default {
  title: 'Components/Cards/Card',
  component: CardComponent,
} as Meta;

export const Card: Story<ICardProps & JSX.IntrinsicElements['a']> = args => (
  <CardComponent as="a" href="" {...args}>
    <Image src="https://images.asos-media.com/products/aape-by-a-bathing-ape-camo-detail-windbreaker-in-green/23274265-1-green?$XXL$&wid=513&fit=constrain" />
    <Box css={{ p: '$3' }}>
      <Text>AAPE By A Bathing Ape camo detail windbreaker in green</Text>
      <Text css={{ fontWeight: 500 }}>€384.99</Text>
    </Box>
  </CardComponent>
);

Card.args = {
  // eslint-disable-next-line prettier/prettier
  variant: "interactive",
};
