import { ShadowNoneIcon } from '@radix-ui/react-icons';
import { Story, Meta } from '@storybook/react';
import SimpleToggleComponent, { ISimpleToggleProps } from './index';

export default {
  title: 'Exemple/SimpleToggle',
  component: SimpleToggleComponent,
} as Meta;

export const SimpleToggle: Story<ISimpleToggleProps> = args => (
  <SimpleToggleComponent {...args} shape="circle">
    <ShadowNoneIcon />
  </SimpleToggleComponent>
);

SimpleToggle.args = {};
