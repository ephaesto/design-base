import { Story, Meta } from '@storybook/react';
import PanelComponent, { IPanelProps } from './Panel';

export default {
  title: 'Exemple/Panel',
  component: PanelComponent,
} as Meta;

export const Panel: Story<IPanelProps> = args => <PanelComponent {...args}>Panel</PanelComponent>;

Panel.args = {};
