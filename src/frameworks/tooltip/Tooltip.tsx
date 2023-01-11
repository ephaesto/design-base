import Box from '../box/Box';
import Text from '../text/Text';
import TooltipRoot from './components/TooltipRoot';
import TooltipTrigger from './components/TooltipTrigger';
import TooltipPortal from './components/TooltipPortal';
import TooltipArrow from './components/TooltipArrow';
import TooltipContent from './components/TooltipContent';
import { ITooltipProps } from './TooltipTypes';

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
    <TooltipRoot {...rootProps}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipPortal>
        <TooltipContent side="top" align="center" sideOffset={5} {...props} multiline={multiline}>
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
            <TooltipArrow width={11} height={5} style={{ fill: 'currentColor' }} />
          </Box>
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  );
};

export default Tooltip;
