import { Story, Meta } from '@storybook/react';
import ButtonComponent, { IButtonProps } from './Button';

export default {
  title: 'Exemple/Button',
  component: ButtonComponent,
} as Meta;

export const Button: Story<IButtonProps> = args => <ButtonComponent {...args}>Button</ButtonComponent>;

Button.args = {
  variant: 'red',
};

export const ButtonGreen: Story<IButtonProps> = Button;

ButtonGreen.args = {
  variant: 'green',
};
