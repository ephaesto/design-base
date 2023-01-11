import { Trigger as AccordionPrimitiveTrigger } from '@radix-ui/react-accordion';
import { ComponentProps, ElementRef } from 'react';
import { CSS } from '../../../../../stitches.config';
import AccordionTriggerRoot from './components/AccordionTriggerRoot';

export type AccordionTriggerRef = ElementRef<typeof AccordionTriggerRoot>;
export type IAccordionTriggerPrimitiveProps = ComponentProps<typeof AccordionPrimitiveTrigger>;
export type IAccordionTriggerProps = IAccordionTriggerPrimitiveProps & { css?: CSS };
