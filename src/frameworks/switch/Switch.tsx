import { forwardRef } from 'react';
import SwitchRoot from './components/SwitchRoot';
import SwitchThumb from './components/SwitchThumb';
import { ISwitchProps, SwitchRef } from './SwitchTypes';

const Switch = forwardRef<SwitchRef, ISwitchProps>(
  (props, forwardedRef): JSX.Element => (
    <SwitchRoot {...props} ref={forwardedRef}>
      <SwitchThumb />
    </SwitchRoot>
  ),
);

Switch.displayName = 'Switch';

export default Switch;
