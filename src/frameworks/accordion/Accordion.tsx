import { Root as AccordionPrimitiveRoot } from '@radix-ui/react-accordion';
import { ComponentProps, ElementRef, forwardRef, ReactNode } from 'react';
import { styled, CSS } from '../../../stitches.config';

const StyledAccordion = styled(AccordionPrimitiveRoot, {});

type AccordionRef = ElementRef<typeof StyledAccordion>;
type IAccordionPrimitiveProps = ComponentProps<typeof AccordionPrimitiveRoot>;
export type IAccordionProps = IAccordionPrimitiveProps & {
  css?: CSS;
  type?: 'single' | 'multiple';
  as?: keyof JSX.IntrinsicElements | ReactNode;
};

export const Accordion = forwardRef<AccordionRef, IAccordionProps>(
  ({ children, ...props }, forwardedRef): JSX.Element => (
    <StyledAccordion ref={forwardedRef} {...props} {...(props?.type === 'single' && { collapsible: true })}>
      {children}
    </StyledAccordion>
  ),
);

Accordion.displayName = 'Accordion';

export default Accordion;
