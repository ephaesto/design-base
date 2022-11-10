import React from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';

type ITooltipProviderProps = React.ComponentProps<typeof TooltipProvider>;
type IDesignSystemProviderProps = ITooltipProviderProps;

export const DesignSystemProvider = ({ children, ...props }: IDesignSystemProviderProps): JSX.Element => {
  return <TooltipProvider {...props}>{children}</TooltipProvider>;
};
