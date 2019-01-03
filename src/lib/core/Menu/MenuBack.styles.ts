import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing.unit * 2,
      color: theme.palette.primary.contrastText,

      '& > svg': {
        height: 24,
      },
    },
  });

export default styles;
