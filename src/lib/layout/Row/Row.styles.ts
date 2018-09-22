import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',

      '& > *': {
        marginRight: theme.spacing.unit * 2,
      },
      '& > *:last-child': {
        marginRight: 0,
      },
    },

    inline: {
      display: 'inline-flex',
      width: 'auto',
    },
  });

export default styles;
