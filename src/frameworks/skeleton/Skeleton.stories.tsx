import { Story, Meta } from '@storybook/react';
import SkeletonComponent, { ISkeletonProps } from './index';

export default {
  title: 'Exemple/Skeleton',
  component: SkeletonComponent,
} as Meta;

export const Skeleton: Story<ISkeletonProps> = args => (
  <SkeletonComponent {...args} css={{ width: '10rem', height: '2rem' }} />
);

Skeleton.args = {};
