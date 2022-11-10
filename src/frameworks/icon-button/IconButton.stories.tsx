import { Story, Meta } from '@storybook/react';
import IconButtonComponent, { IIconButtonProps } from './IconButton';

export default {
  title: 'Exemple/IconButton',
  component: IconButtonComponent,
} as Meta;

export const IconButton: Story<IIconButtonProps> = args => <IconButtonComponent {...args}>X</IconButtonComponent>;

IconButton.args = {};
