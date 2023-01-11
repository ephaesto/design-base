import { ComponentProps, ReactElement, ReactNode } from 'react';
import { Root as TooltipPrimitiveRoot, Content as TooltipPrimitiveContent } from '@radix-ui/react-tooltip';

export type ITooltipPrimitiveRootProps = ComponentProps<typeof TooltipPrimitiveRoot>;
export type ITooltipPrimitiveContentProps = ComponentProps<typeof TooltipPrimitiveContent>;
export type ITooltipProps = ITooltipPrimitiveContentProps &
  ITooltipPrimitiveRootProps & {
    children: ReactElement;
    content: ReactNode;
    multiline?: boolean;
    open?: unknown;
    defaultOpen?: (open: boolean) => void;
    onOpenChange?: (open: boolean) => void;
    delayDuration?: number;
    disableHoverableContent?: boolean;
  };
