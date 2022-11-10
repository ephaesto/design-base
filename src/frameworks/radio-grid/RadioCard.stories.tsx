import { Story, Meta } from '@storybook/react';
import RadioGridComponent, { IRadioGridProps } from './RadioGrid';
import RadioGridGroup from './RadioGridGroup';

export default {
  title: 'Exemple/RadioGrid',
  component: RadioGridComponent,
} as Meta;

export const RadioGrid: Story<IRadioGridProps> = args => (
  <RadioGridGroup>
    <RadioGridComponent {...args} value="a" css={{ mr: '$3' }}>
      grid A
    </RadioGridComponent>
    <RadioGridComponent {...args} value="b" css={{ mr: '$3' }}>
      grid B
    </RadioGridComponent>
  </RadioGridGroup>
);

RadioGrid.args = {};
