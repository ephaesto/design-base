import { Root as AccordionPrimitiveRoot } from '@radix-ui/react-accordion';
import { forwardRef } from 'react';
import { styled } from '../../../stitches.config';
import { AccordionRef, IAccordionProps } from './AccordionTypes';

export const AccordionRoot = styled(AccordionPrimitiveRoot, {});

export const Accordion = forwardRef<AccordionRef, IAccordionProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <AccordionRoot ref={forwardedRef} {...props} {...(props?.type === 'single' && { collapsible: true })}>
      {children}
    </AccordionRoot>
  ),
);

Accordion.displayName = 'Accordion';

export default Accordion;
