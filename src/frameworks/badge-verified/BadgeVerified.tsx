import { forwardRef } from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import { BadgeVerifiedRef, IBadgeVerifiedProps } from './BadgeVerifiedTypes';
import BadgeVerifiedRoot from './components/BadgeVerifiedRoot';

const BadgeVerified = forwardRef<BadgeVerifiedRef, IBadgeVerifiedProps>(
  (props, forwardedRef): JSX.Element => (
    <BadgeVerifiedRoot {...props} ref={forwardedRef}>
      <CheckIcon />
    </BadgeVerifiedRoot>
  ),
);

BadgeVerified.displayName = 'BadgeVerified';

export default BadgeVerified;
