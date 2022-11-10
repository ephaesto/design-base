import { BoxIcon, RadiobuttonIcon, SliderIcon, SwitchIcon, TextIcon } from '@radix-ui/react-icons';
import { Story, Meta } from '@storybook/react';
import Box from '../box/Box';
import Scrollbar from '../scrollbar/Scrollbar';
import Text from '../text/Text';
import TreeItemComponent, { ITreeItemProps } from './TreeItem';

export default {
  title: 'Exemple/TreeItem',
  component: TreeItemComponent,
} as Meta;

export const TreeItem: Story<ITreeItemProps> = () => (
  <Scrollbar>
    <TreeItemComponent>
      <Box css={{ mr: '$2' }}>
        <BoxIcon />
      </Box>
      <Text size="1">TreeItemComponent</Text>
    </TreeItemComponent>
    <TreeItemComponent>
      <Box css={{ mr: '$2' }}>
        <BoxIcon />
      </Box>
      <Text size="1">TreeItemComponent</Text>
    </TreeItemComponent>
    <TreeItemComponent css={{ backgroundColor: '$slate5' }}>
      <Box css={{ mr: '$2' }}>
        <RadiobuttonIcon />
      </Box>
      <Text size="1">Radio</Text>
    </TreeItemComponent>
    <TreeItemComponent variant="gray" css={{ pl: 45 }}>
      <Box css={{ mr: '$2' }}>
        <SliderIcon />
      </Box>
      <Text size="1">Slider</Text>
    </TreeItemComponent>
    <TreeItemComponent variant="gray" css={{ pl: 45 }}>
      <Box css={{ mr: '$2' }}>
        <SwitchIcon />
      </Box>
      <Text size="1">Switch</Text>
    </TreeItemComponent>
    <TreeItemComponent variant="gray" css={{ pl: 45 }}>
      <Box css={{ mr: '$2' }}>
        <TextIcon />
      </Box>
      <Text size="1">Text</Text>
    </TreeItemComponent>
  </Scrollbar>
);

TreeItem.args = {};
