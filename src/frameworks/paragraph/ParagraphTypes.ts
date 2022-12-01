import { ComponentProps, ElementRef, ReactNode, Ref } from 'react';
import Text from '../text/Text';
import { VariantProps, CSS } from '../../../stitches.config';
import { DEFAULT_TAG } from './constants/defaultTag';

export type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size'>;
export type ParagraphSizeVariants = '1' | '2';
export type ParagraphVariants = { size?: ParagraphSizeVariants } & Omit<VariantProps<typeof Text>, 'size'>;
export type ParagraphRef = ElementRef<typeof DEFAULT_TAG>;
export type IParagraphProps = ComponentProps<typeof DEFAULT_TAG> &
  ParagraphVariants & {
    css?: CSS;
    as?: keyof JSX.IntrinsicElements | ReactNode;
    ref?: Ref<HTMLHeadingElement> | undefined;
  };
export type ITextSize = {
  [x in ParagraphSizeVariants]: TextSizeVariants['size'];
};

export type ITextCss = {
  [x in ParagraphSizeVariants]: CSS;
};
