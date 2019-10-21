import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing.unit * 2,
      marginLeft: -theme.spacing.unit * 2,
      color: theme.menu.foreground,

      '& > svg': {
        height: 24,
      },
    },
  });

export default styles;
