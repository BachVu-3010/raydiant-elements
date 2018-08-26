import { Theme } from '../../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',

      '& > *': {
        marginRight: theme.spacing.unit,
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
