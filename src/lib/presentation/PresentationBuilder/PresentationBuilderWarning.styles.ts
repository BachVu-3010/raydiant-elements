import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1, 2),
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.text.primary,

      '& > svg': {
        marginRight: theme.spacing(1),
      },
    },
  });

export default styles;
