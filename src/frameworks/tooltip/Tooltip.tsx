import { ComponentProps, ReactElement, ReactNode } from 'react';
import {
  Root as TooltipPrimitiveRoot,
  Content as TooltipPrimitiveContent,
  Trigger as TooltipPrimitiveTrigger,
  Portal as TooltipPrimitivePortal,
  Arrow as TooltipPrimitiveArrow,
} from '@radix-ui/react-tooltip';
import { styled } from '../../../stitches.config';
import Box from '../box/Box';
import Text from '../text/Text';

const StyledContent = styled(TooltipPrimitiveContent, {
  backgroundColor: '$transparentPanel',
  borderRadius: '$1',
  padding: '$1 $2',

  variants: {
    multiline: {
      true: {
        maxWidth: 250,
        pb: 7,
      },
    },
  },
});

type ITooltipPrimitiveRootProps = ComponentProps<typeof TooltipPrimitiveRoot>;
type ITooltipPrimitiveContentProps = ComponentProps<typeof TooltipPrimitiveContent>;
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

const Tooltip = ({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  delayDuration,
  disableHoverableContent,
  multiline,
  ...props
}: ITooltipProps): JSX.Element => {
  const rootProps = { open, defaultOpen, onOpenChange, delayDuration, disableHoverableContent };
  return (
    <TooltipPrimitiveRoot {...rootProps}>
      <TooltipPrimitiveTrigger asChild>{children}</TooltipPrimitiveTrigger>
      <TooltipPrimitivePortal>
        <StyledContent side="top" align="center" sideOffset={5} {...props} multiline={multiline}>
          <Text
            size="1"
            as="p"
            css={{
              color: '$loContrast',
              ...(multiline && { lineHeight: '20px' }),
            }}
          >
            {content}
          </Text>
          <Box css={{ color: '$transparentExtreme' }}>
            <TooltipPrimitiveArrow width={11} height={5} style={{ fill: 'currentColor' }} />
          </Box>
        </StyledContent>
      </TooltipPrimitivePortal>
    </TooltipPrimitiveRoot>
  );
};

export default Tooltip;
