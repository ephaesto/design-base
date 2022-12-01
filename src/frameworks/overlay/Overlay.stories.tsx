import { Story, Meta } from '@storybook/react';
import OverlayComponent, { IOverlayProps } from './index';

export default {
  title: 'Exemple/Overlay',
  component: OverlayComponent,
} as Meta;

export const Overlay: Story<IOverlayProps> = args => <OverlayComponent {...args}>Overlay</OverlayComponent>;

Overlay.args = {};
