import { Story, Meta } from '@storybook/react';
import ProgressBarComponent, { IProgressBarProps } from './index';

export default {
  title: 'Exemple/ProgressBar',
  component: ProgressBarComponent,
} as Meta;

export const ProgressBar: Story<IProgressBarProps> = args => (
  <ProgressBarComponent {...args} css={{ width: '8rem' }} max={100} value={50} />
);

ProgressBar.args = {};
