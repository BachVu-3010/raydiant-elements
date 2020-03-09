import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(2),
      marginLeft: theme.spacing(-2),
      color: theme.menu.foreground,

      '& > svg': {
        height: 24,
      },
    },
  });

export default styles;
