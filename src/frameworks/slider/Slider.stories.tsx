import { Story, Meta } from '@storybook/react';
import SliderComponent, { ISliderProps } from './Slider';

export default {
  title: 'Exemple/Slider',
  component: SliderComponent,
} as Meta;

export const Slider: Story<ISliderProps> = args => (
  <SliderComponent {...args} defaultValue={[50]} max={100} css={{ width: '10rem' }} />
);

Slider.args = {};
