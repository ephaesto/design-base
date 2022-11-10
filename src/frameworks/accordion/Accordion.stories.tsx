import { Story, Meta } from '@storybook/react';
import AccordionComponent, { AccordionContent, AccordionItem, AccordionTrigger, IAccordionProps } from './index';
import Text from '../text/Text';

export default {
  title: 'Exemple/Accordion',
  component: AccordionComponent,
} as Meta;

export const Accordion: Story<IAccordionProps> = () => (
  <AccordionComponent type="single">
    <AccordionItem value="accordion-one">
      <AccordionTrigger>
        <Text size="4" css={{ width: '400px' }}>
          Accordion one
        </Text>
      </AccordionTrigger>
      <AccordionContent>
        <Text size="4" css={{ width: '400px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Text>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="accordion-two">
      <AccordionTrigger>
        <Text size="4" css={{ width: '400px' }}>
          Accordion two
        </Text>
      </AccordionTrigger>
      <AccordionContent>
        <Text size="4" css={{ width: '400px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Text>
      </AccordionContent>
    </AccordionItem>
  </AccordionComponent>
);

Accordion.args = {};
