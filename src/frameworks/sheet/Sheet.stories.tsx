import { Story, Meta } from '@storybook/react';
import Button from '../button/Button';
import SheetComponent, { ISheetProps } from './Sheet';
import SheetContent from './SheetContent';
import SheetTrigger from './SheetTrigger';

export default {
  title: 'Exemple/Sheet',
  component: SheetComponent,
} as Meta;

export const Sheet: Story<ISheetProps> = args => (
  <SheetComponent {...args}>
    <SheetTrigger asChild>
      <Button>Left</Button>
    </SheetTrigger>
    <SheetContent side="left" />
  </SheetComponent>
);

Sheet.args = {};
