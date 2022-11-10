import { forwardRef } from 'react';
import { Image as AvatarPrimitiveImage, Fallback as AvatarPrimitiveFallback } from '@radix-ui/react-avatar';
import { styled } from '../../../stitches.config';
import Box from '../box/Box';
import Status from '../status/Status';
import { AvatarRef, IAvatarProps } from './AvatarTypes';
import AvatarRoot from './components/AvatarRoot';

export const AvatarImage = styled(AvatarPrimitiveImage, {
  display: 'flex',
  objectFit: 'cover',
  boxSizing: 'border-box',
  height: '100%',
  verticalAlign: 'middle',
  width: '100%',
});

export const AvatarFallback = styled(AvatarPrimitiveFallback, {
  textTransform: 'uppercase',

  variants: {
    size: {
      '1': {
        fontSize: '10px',
        lineHeight: '15px',
      },
      '2': {
        fontSize: '$3',
      },
      '3': {
        fontSize: '$6',
      },
      '4': {
        fontSize: '$7',
      },
      '5': {
        fontSize: '$8',
      },
      '6': {
        fontSize: '$9',
      },
    },
  },
  defaultVariants: {
    size: '2',
  },
});

export const AvatarNestedItem = styled('div', {
  boxShadow: '0 0 0 2px $colors$loContrast',
  borderRadius: '50%',
});

export const AvatarGroup = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
  [`& ${AvatarNestedItem}:nth-child(n+2)`]: {
    marginRight: '-$1',
  },
});

const Avatar = forwardRef<AvatarRef, IAvatarProps>(
  ({ alt, src, fallback, size, variant, shape, css, status, ...props }, forwardedRef) => {
    return (
      <Box
        css={{
          ...css,
          position: 'relative',
          height: 'fit-content',
          width: 'fit-content',
        }}
      >
        <AvatarRoot {...props} ref={forwardedRef} size={size} variant={variant} shape={shape}>
          <AvatarImage alt={alt} src={src} />
          <AvatarFallback size={size}>{fallback}</AvatarFallback>
        </AvatarRoot>
        {status && (
          <Box
            css={{
              position: 'absolute',
              bottom: '0',
              right: '0',
              boxShadow: '0 0 0 3px $colors$loContrast',
              borderRadius: '$round',
              mr: '-3px',
              mb: '-3px',
            }}
          >
            <Status size={size && size > 2 ? '2' : '1'} variant={status} />
          </Box>
        )}
      </Box>
    );
  },
);

Avatar.displayName = 'Avatar';

export default Avatar;
