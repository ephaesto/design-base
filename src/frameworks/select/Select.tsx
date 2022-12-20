import { forwardRef } from 'react';
import SelectWrapper from './components/SelectWrapper';
import SelectRoot from './components/SelectRoot';
import SelectIcon from './components/SelectIcon';
import { SelectRef, ISelectProps } from './SelectTypes';

const Select = forwardRef<SelectRef, ISelectProps>(
  ({ css, ...props }, forwardedRef): JSX.Element => (
    <SelectWrapper css={css}>
      <SelectRoot ref={forwardedRef} {...props} />
      <SelectIcon />
    </SelectWrapper>
  ),
);

Select.displayName = 'Select';

export default Select;
