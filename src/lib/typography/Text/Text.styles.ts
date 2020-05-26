import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    input: {
      color: 'inherit',
      fontSize: 'inherit',
      backgroundColor: 'inherit',
      letterSpacing: 'inherit',
      lineHeight: 1.25,
      outline: 0,
      border: 0,
      borderBottom: `1px dashed ${theme.input.border}`,
    },
  });

export default styles;
