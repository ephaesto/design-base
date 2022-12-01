import { Root as LabelPrimitiveRoot } from '@radix-ui/react-label';
import { styled } from '../../../stitches.config';
import Text from '../text/Text';

const Label = styled(LabelPrimitiveRoot, Text, {
  display: 'inline-block',
  verticalAlign: 'middle',
  cursor: 'default',
});

export default Label;
