import { Story, Meta } from '@storybook/react';
import Box from '../box';
import Label from '../label';
import RadioComponent, { IRadioProps } from './Radio';
import RadioGroup from './RadioGroup';

export default {
  title: 'Exemple/Radio',
  component: RadioComponent,
} as Meta;

export const Radio: Story<IRadioProps> = args => (
  <RadioGroup>
    <Box css={{ display: 'flex', alignItems: 'center' }}>
      <RadioComponent {...args} value="a" size="1" css={{ mr: '$3' }} />
      <Label className="Label" htmlFor="a">
        Default
      </Label>
    </Box>
    <Box css={{ display: 'flex', alignItems: 'center' }}>
      <RadioComponent {...args} value="b" size="1" css={{ mr: '$3' }} />
      <Label className="Label" htmlFor="b">
        Comfortable
      </Label>
    </Box>
  </RadioGroup>
);

Radio.args = {};
