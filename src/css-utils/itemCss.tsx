import { css } from '../../stitches.config';
import { baseItemCss } from './baseItemCss';

export const itemCss = css(baseItemCss, {
  position: 'relative',
  color: '$hiContrast',

  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: '$blue9',
    color: 'white',
  },

  '&[data-disabled]': {
    color: '$slate9',
  },
});
