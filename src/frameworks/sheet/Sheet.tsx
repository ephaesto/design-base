import { Root as DialogPrimitiveRoot } from '@radix-ui/react-dialog';
import { ElementRef, ComponentProps, ReactNode } from 'react';
import { styled, CSS } from '../../../stitches.config';

const Sheet = styled(DialogPrimitiveRoot, {});

export type SheetRef = ElementRef<typeof Sheet>;
export type ISheetProps = ComponentProps<typeof Sheet> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};

export default Sheet;
