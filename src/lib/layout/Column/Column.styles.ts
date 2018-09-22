import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',

      '& > *': {
        marginBottom: theme.spacing.unit * 2,
      },
      '& > *:last-child': {
        marginBottom: 0,
      },
      // This is here to add extra spacing between columns—used by the login
      // screen to add more space between the login button and "forgot your password".
      // Not sure how I feel about this yet, may want to revisit this later.
      '& + &': {
        marginTop: theme.spacing.unit * 4,
      },
    },

    inline: {
      display: 'inline-flex',
      width: 'auto',
    },
  });

export default styles;
