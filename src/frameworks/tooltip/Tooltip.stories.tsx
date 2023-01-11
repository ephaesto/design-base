import { Story, Meta } from '@storybook/react';
import { DesignSystemProvider } from '../../providers/DesignSystemProvider';
import IconButton from '../icon-button/IconButton';
import TooltipComponent, { ITooltipProps } from './index';

export default {
  title: 'Exemple/Tooltip',
  component: TooltipComponent,
} as Meta;

export const Tooltip: Story<ITooltipProps> = args => (
  <DesignSystemProvider>
    <TooltipComponent {...args} content="Insert (Cmd+P)" side="bottom" align="center">
      <IconButton>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.2">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.5 3V2H6.5V3V6.5H3H2V8.5H3H6.5V12V13H8.5V12V8.5H12H13V6.5H12H8.5V3Z"
              fill="#0488FC"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 3C8 2.72386 7.77614 2.5 7.5 2.5C7.22386 2.5 7 2.72386 7 3V7H3C2.72386 7 2.5 7.22386 2.5 7.5C2.5 7.77614 2.72386 8 3 8H7V12C7 12.2761 7.22386 12.5 7.5 12.5C7.77614 12.5 8 12.2761 8 12V8H12C12.2761 8 12.5 7.77614 12.5 7.5C12.5 7.22386 12.2761 7 12 7H8V3Z"
            fill="#0488FC"
          />
        </svg>
      </IconButton>
    </TooltipComponent>
  </DesignSystemProvider>
);

Tooltip.args = {};
