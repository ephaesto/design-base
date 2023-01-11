import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import Table from './Table';

export type TableRef = ElementRef<typeof Table>;
export type ITableProps = ComponentProps<typeof Table> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
