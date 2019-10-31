import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';
import { inputHeight } from '../Input/Input.styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      borderRadius: theme.borderRadius.sm,
      backgroundColor: theme.input.background,
      height: inputHeight,
    },
    multiline: {
      height: 'auto',
    },
  });

export default styles;
