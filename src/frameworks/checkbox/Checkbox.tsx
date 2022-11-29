import { forwardRef } from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import CheckboxIndicator from './components/CheckboxIndicator';
import CheckboxRoot from './components/CheckboxRoot';
import { CheckboxRef, ICheckboxProps } from './CheckboxTypes';

const Checkbox = forwardRef<CheckboxRef, ICheckboxProps>(
  (props, forwardedRef): JSX.Element => (
    <CheckboxRoot {...props} ref={forwardedRef}>
      <CheckboxIndicator>
        <CheckIcon />
      </CheckboxIndicator>
    </CheckboxRoot>
  ),
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
