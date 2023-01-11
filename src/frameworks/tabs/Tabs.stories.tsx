import { Story, Meta } from '@storybook/react';
import Text from '../text/Text';
import TabsComponent, { ITabsProps, TabsContent, TabsList, TabsTrigger } from './index';

export default {
  title: 'Exemple/Tabs',
  component: TabsComponent,
} as Meta;

export const Tabs: Story<ITabsProps> = () => (
  <TabsComponent defaultValue="tab-one">
    <TabsList>
      <TabsTrigger value="tab-one">General</TabsTrigger>
      <TabsTrigger value="tab-two">Hosting</TabsTrigger>
      <TabsTrigger value="tab-three">Editor</TabsTrigger>
      <TabsTrigger value="tab-four">Billing</TabsTrigger>
      <TabsTrigger value="tab-five">SEO</TabsTrigger>
    </TabsList>
    <TabsContent value="tab-one">
      <Text>Tabs Content 1</Text>
    </TabsContent>
    <TabsContent value="tab-two">
      <Text>Tabs Content 2</Text>
    </TabsContent>
    <TabsContent value="tab-three">
      <Text>Tabs Content 3</Text>
    </TabsContent>
    <TabsContent value="tab-four">
      <Text>Tabs Content 4</Text>
    </TabsContent>
    <TabsContent value="tab-five">
      <Text>Tabs Content 5</Text>
    </TabsContent>
  </TabsComponent>
);

Tabs.args = {};
