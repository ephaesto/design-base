import { ChevronDownIcon } from '@radix-ui/react-icons';
import { forwardRef } from 'react';
import AccordionHeader from '../AccordionHeader';
import { AccordionTriggerRef, IAccordionTriggerProps } from './AccordionTriggerTypes';
import AccordionTriggerRoot from './components/AccordionTriggerRoot';

const AccordionTrigger = forwardRef<AccordionTriggerRef, IAccordionTriggerProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <AccordionHeader>
      <AccordionTriggerRoot {...props} ref={forwardedRef}>
        {children}
        <ChevronDownIcon />
      </AccordionTriggerRoot>
    </AccordionHeader>
  ),
);

AccordionTrigger.displayName = 'AccordionTrigger';

export default AccordionTrigger;
