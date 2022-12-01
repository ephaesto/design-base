import { Story, Meta } from '@storybook/react';
import Button from '../button/Button';
import ControlGroupComponent, { IControlGroupProps } from './index';

export default {
  title: 'Exemple/ControlGroup',
  component: ControlGroupComponent,
} as Meta;

export const ControlGroup: Story<IControlGroupProps> = args => (
  <ControlGroupComponent {...args}>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
  </ControlGroupComponent>
);

ControlGroup.args = {};
