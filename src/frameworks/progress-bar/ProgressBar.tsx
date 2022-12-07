import { forwardRef } from 'react';
import ProgressBarIndicator from './components/ProgressBarIndicator';
import ProgressBarRoot from './components/ProgressBarRoot';
import { IProgressBarProps, ProgressBarRef } from './ProgressBarTypes';

const ProgressBar = forwardRef<ProgressBarRef, IProgressBarProps>(
  ({ value, max = 100, ...props }, forwardedRef): JSX.Element => {
    const percentage = value != null ? Math.round((value / max) * 100) : null;

    return (
      <ProgressBarRoot {...props} ref={forwardedRef} value={value} max={max}>
        <ProgressBarIndicator style={{ transform: `translateX(${percentage}%)` }} />
      </ProgressBarRoot>
    );
  },
);

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
