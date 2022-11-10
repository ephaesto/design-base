import { ComponentProps, ElementRef, forwardRef, ReactNode } from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import { styled, CSS } from '../../../stitches.config';

const StyledBadgeVerified = styled('div', {
  alignItems: 'center',
  backgroundColor: '$blue9',
  borderRadius: '$round',
  color: 'white',
  flexShrink: 0,
  justifyContent: 'center',
  width: '$3',
  height: '$3',
});

type BadgeVerifiedRef = ElementRef<typeof StyledBadgeVerified>;
export type IBadgeVerifiedProps = ComponentProps<typeof StyledBadgeVerified> & {
  css?: CSS;
  as?: keyof JSX.IntrinsicElements | ReactNode;
};

const BadgeVerified = forwardRef<BadgeVerifiedRef, IBadgeVerifiedProps>(
  (props, forwardedRef): JSX.Element => (
    <StyledBadgeVerified {...props} ref={forwardedRef}>
      <CheckIcon />
    </StyledBadgeVerified>
  ),
);

BadgeVerified.displayName = 'BadgeVerified';

export default BadgeVerified;
