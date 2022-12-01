import { ComponentProps, ElementRef, ReactNode, Ref } from 'react';
import { VariantProps, CSS } from '../../../stitches.config';
import Text from '../text/Text';
import { DEFAULT_TAG } from './constants/defaultTag';

export type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size'>;
export type HeadingSizeVariants = '1' | '2' | '3' | '4';
export type HeadingVariants = { size?: HeadingSizeVariants } & Omit<VariantProps<typeof Text>, 'size'>;
export type HeadingRef = ElementRef<typeof DEFAULT_TAG>;
export type IHeadingProps = ComponentProps<typeof DEFAULT_TAG> &
  HeadingVariants & {
    css?: CSS;
    as?: keyof JSX.IntrinsicElements | ReactNode;
    ref?: Ref<HTMLHeadingElement> | undefined;
  };

export type ITextSize = {
  [x in HeadingSizeVariants]: TextSizeVariants['size'];
};

export type ITextCss = {
  [x in HeadingSizeVariants]: CSS;
};
