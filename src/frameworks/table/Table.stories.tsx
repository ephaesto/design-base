import { CheckIcon } from '@radix-ui/react-icons';
import { Story, Meta } from '@storybook/react';
import Box from '../box/Box';
import Caption from './Caption';
import TableComponent, { ITableProps } from './Table';
import Tbody from './Tbody';
import Td from './Td';
import { Tfoot } from './Tfoot';
import Th from './Th';
import { Thead } from './Thead';
import Tr from './Tr';

export default {
  title: 'Exemple/Table',
  component: TableComponent,
} as Meta;

export const Table: Story<ITableProps> = () => (
  <TableComponent>
    <Caption>This is the table caption.</Caption>
    <Thead>
      <Tr>
        <Th css={{ width: 190 }}>Club</Th>
        <Td align="center">MP</Td>
        <Td align="center">W</Td>
        <Td align="center">D</Td>
        <Td align="center">L</Td>
        <Td align="center">GF</Td>
        <Td align="center">GA</Td>
        <Td align="center">GD</Td>
        <Td align="center">Pts</Td>
        <Td css={{ width: 100 }} align="center">
          Last 5
        </Td>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Th css={{ width: 190 }}>Man City</Th>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">
          <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
            <CheckIcon />
          </Box>
        </Td>
      </Tr>
      <Tr>
        <Th css={{ width: 190 }}>Man United</Th>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">
          <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
            <CheckIcon />
          </Box>
        </Td>
      </Tr>
      <Tr>
        <Td>Leicester City</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">
          <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
            <CheckIcon />
          </Box>
        </Td>
      </Tr>
      <Tr>
        <Th css={{ width: 190 }}>Chelsea</Th>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">
          <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
            <CheckIcon />
          </Box>
        </Td>
      </Tr>
      <Tr>
        <Th css={{ width: 190 }}>West Ham</Th>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">
          <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
            <CheckIcon />
          </Box>
        </Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th css={{ width: 190 }}>Leicester City</Th>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">32</Td>
        <Td align="center">
          <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
            <CheckIcon />
          </Box>
        </Td>
      </Tr>
    </Tfoot>
  </TableComponent>
);

Table.args = {};
