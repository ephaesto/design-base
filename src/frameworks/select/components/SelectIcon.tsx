import { CaretSortIcon } from '@radix-ui/react-icons';
import { styled } from '../../../../stitches.config';

const SelectIcon = styled(CaretSortIcon, {
  position: 'absolute',
  pointerEvents: 'none',
  display: 'inline',

  // Use margins instead of top/left to avoid setting "position: relative" on parent,
  // which would make stacking context tricky with Select used in a control group.
  marginTop: 5,
  marginLeft: -16,
});

export default SelectIcon;
