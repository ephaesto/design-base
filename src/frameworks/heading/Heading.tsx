import { forwardRef } from 'react';
import merge from 'lodash.merge';
import Text from '../text/Text';
import { HeadingRef, IHeadingProps, ITextCss, ITextSize } from './HeadingTypes';
import { DEFAULT_TAG } from './constants/defaultTag';

const Heading = forwardRef<HeadingRef, IHeadingProps>(
  ({ children, size = '1', css, ...textProps }, forwardedRef): JSX.Element => {
    const textSize: ITextSize = {
      1: { '@initial': '4', '@bp2': '5' },
      2: { '@initial': '6', '@bp2': '7' },
      3: { '@initial': '7', '@bp2': '8' },
      4: { '@initial': '8', '@bp2': '9' },
    };

    const textCss: ITextCss = {
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
        size={textSize[size]}
        css={{
          fontVariantNumeric: 'proportional-nums',
          ...merge(textCss[size], css),
        }}
      >
        {children}
      </Text>
    );
  },
);

Heading.displayName = 'Heading';

export default Heading;
