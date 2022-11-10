import { Story, Meta } from '@storybook/react';
import RadioComponent, { IRadioProps } from './Radio';
import RadioGroup from './RadioGroup';

export default {
  title: 'Exemple/Radio',
  component: RadioComponent,
} as Meta;

export const Radio: Story<IRadioProps> = args => (
  <RadioGroup>
    <RadioComponent {...args} value="a" size="1" css={{ mr: '$3' }} />
    <RadioComponent {...args} value="b" size="1" css={{ mr: '$3' }} />
  </RadioGroup>
);

Radio.args = {};
