import { Story, Meta } from '@storybook/react';
import ContainerComponent, { IContainerProps } from './Container';

export default {
  title: 'Exemple/Container',
  component: ContainerComponent,
} as Meta;

export const Container: Story<IContainerProps> = args => <ContainerComponent {...args}>Container</ContainerComponent>;

Container.args = {};
