import { ComponentProps, ElementRef, forwardRef, ReactNode, Ref } from 'react';
import merge from 'lodash.merge';
import { VariantProps, CSS } from '../../../stitches.config';
import Text from '../text/Text';

const DEFAULT_TAG = 'h1';

type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size'>;
type HeadingSizeVariants = '1' | '2' | '3' | '4';
type HeadingVariants = { size?: HeadingSizeVariants } & Omit<VariantProps<typeof Text>, 'size'>;
export type HeadingRef = ElementRef<typeof DEFAULT_TAG>;
export type IHeadingProps = ComponentProps<typeof DEFAULT_TAG> &
  HeadingVariants & {
    css?: CSS;
    as?: keyof JSX.IntrinsicElements | ReactNode;
    ref?: Ref<HTMLHeadingElement> | undefined;
  };

const Heading = forwardRef<HeadingRef, IHeadingProps>(
  ({ children, size = '1', css, ...textProps }, forwardedRef): JSX.Element => {
    const textSize: Record<HeadingSizeVariants, TextSizeVariants['size']> = {
      1: { '@initial': '4', '@bp2': '5' },
      2: { '@initial': '6', '@bp2': '7' },
      3: { '@initial': '7', '@bp2': '8' },
      4: { '@initial': '8', '@bp2': '9' },
    };

    const textCss: Record<HeadingSizeVariants, CSS> = {
      1: { fontWeight: 500, lineHeight: '20px', '@bp2': { lineHeight: '23px' } },
      2: { fontWeight: 500, lineHeight: '25px', '@bp2': { lineHeight: '30px' } },
      3: { fontWeight: 500, lineHeight: '33px', '@bp2': { lineHeight: '41px' } },
      4: { fontWeight: 500, lineHeight: '35px', '@bp2': { lineHeight: '55px' } },
    };

    return (
      <Text
        as={DEFAULT_TAG}
        {...textProps}
        ref={forwardedRef}
        size={textSize[size] as TextSizeVariants['size']}
        css={{
          fontVariantNumeric: 'proportional-nums',
          ...merge(textCss[size] as CSS, css),
        }}
      >
        {children}
      </Text>
    );
  },
);

Heading.displayName = 'Heading';

export default Heading;
