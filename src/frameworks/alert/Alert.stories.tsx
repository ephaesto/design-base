import { Story, Meta } from '@storybook/react';
import AlertComponent, { IAlertProps } from './index';

export default {
  title: 'Exemple/Alert',
  component: AlertComponent,
} as Meta;
export const Alert: Story<IAlertProps> = args => <AlertComponent {...args}>Alert</AlertComponent>;

Alert.args = {
  variant: 'red',
};
