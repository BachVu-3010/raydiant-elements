import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.text.primary,

      '& > svg': {
        marginRight: theme.spacing.unit,
      },
    },
  });

export default styles;
