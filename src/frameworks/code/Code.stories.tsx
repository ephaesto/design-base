import { Story, Meta } from '@storybook/react';
import CodeComponent, { ICodeProps } from './index';

export default {
  title: 'Exemple/Code',
  component: CodeComponent,
} as Meta;

export const Code: Story<ICodeProps> = args => <CodeComponent {...args}>Code()</CodeComponent>;

Code.args = {};
