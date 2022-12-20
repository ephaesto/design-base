import { forwardRef } from 'react';
import RadioRoot from './components/RadioRoot';
import RadioIndicator from './components/RadioIndicator';
import { IRadioProps, RadioRef } from './RadioTypes';

const Radio = forwardRef<RadioRef, IRadioProps>(
  (props, forwardedRef): JSX.Element => (
    <RadioRoot {...props} ref={forwardedRef}>
      <RadioIndicator />
    </RadioRoot>
  ),
);

Radio.displayName = 'Radio';

export default Radio;
