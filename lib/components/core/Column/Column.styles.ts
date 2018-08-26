import { Theme } from '../../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',

      '& > *': {
        marginBottom: theme.spacing.unit,
      },
      '& > *:last-child': {
        marginBottom: 0,
      },
    },

    inline: {
      display: 'inline-flex',
      width: 'auto',
    },
  });

export default styles;
