import { Story, Meta } from '@storybook/react';
import StatusComponent, { IStatusProps } from './index';

export default {
  title: 'Exemple/Status',
  component: StatusComponent,
} as Meta;

export const Status: Story<IStatusProps> = args => <StatusComponent {...args} size="2" variant="green" />;

Status.args = {};
