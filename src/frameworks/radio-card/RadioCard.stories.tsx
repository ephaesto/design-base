import { Story, Meta } from '@storybook/react';
import RadioCardComponent, { IRadioCardProps } from './RadioCard';
import RadioCardGroup from './RadioCardGroup';

export default {
  title: 'Exemple/RadioCard',
  component: RadioCardComponent,
} as Meta;

export const RadioCard: Story<IRadioCardProps> = args => (
  <RadioCardGroup>
    <RadioCardComponent {...args} value="a" css={{ mr: '$3' }}>
      radio card A
    </RadioCardComponent>
    <RadioCardComponent {...args} value="b" css={{ mr: '$3' }}>
      radio card B
    </RadioCardComponent>
  </RadioCardGroup>
);

RadioCard.args = {};
