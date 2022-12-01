import { forwardRef } from 'react';
import merge from 'lodash.merge';
import Text from '../text/Text';
import { DEFAULT_TAG } from './constants/defaultTag';
import { IParagraphProps, ITextSize, ITextCss, ParagraphRef } from './ParagraphTypes';

const Paragraph = forwardRef<ParagraphRef, IParagraphProps>(
  ({ size = '1', css, ...textProps }, forwardedRef): JSX.Element => {
    const textSize: ITextSize = {
      1: { '@initial': '3', '@bp2': '4' },
      2: { '@initial': '5', '@bp2': '6' },
    };

    const textCss: ITextCss = {
      1: { lineHeight: '25px', '@bp2': { lineHeight: '27px' } },
      2: { color: '$slate11', lineHeight: '27px', '@bp2': { lineHeight: '30px' } },
    };
    return (
      <Text
        as={DEFAULT_TAG}
        {...textProps}
        ref={forwardedRef}
        size={textSize[size]}
        css={{
          ...merge(textCss[size], css),
        }}
      />
    );
  },
);

Paragraph.displayName = 'Paragraph';

export default Paragraph;
