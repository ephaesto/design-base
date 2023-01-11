import { ElementRef, ComponentProps, ReactNode } from 'react';
import { CSS } from '../../../stitches.config';
import TreeItem from './TreeItem';

export type TreeItemRef = ElementRef<typeof TreeItem>;
export type ITreeItemProps = ComponentProps<typeof TreeItem> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};
