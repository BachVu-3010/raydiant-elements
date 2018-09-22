import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    select: {
      width: '100%',
      boxSizing: 'border-box',
      paddingRight: 32,
      '&:focus': {
        color: theme.input.foreground,
        backgroundColor: 'transparent',
      },
    },
  });

export default styles;
