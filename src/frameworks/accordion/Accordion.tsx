import { forwardRef } from 'react';
import { AccordionRef, IAccordionProps } from './AccordionTypes';
import AccordionRoot from './components/AccordionRoot';

export const Accordion = forwardRef<AccordionRef, IAccordionProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <AccordionRoot ref={forwardedRef} {...props} {...(props?.type === 'single' && { collapsible: true })}>
      {children}
    </AccordionRoot>
  ),
);

Accordion.displayName = 'Accordion';

export default Accordion;
