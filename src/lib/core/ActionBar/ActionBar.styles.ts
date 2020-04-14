import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: 68,
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      borderTop: '1px solid transparent',
      borderBottom: theme.actionBar.border
        ? `1px solid ${theme.actionBar.border}`
        : '',

      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      },
    },

    condensed: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },

    bottom: {
      borderTop: theme.actionBar.border
        ? `1px solid ${theme.actionBar.border}`
        : '',
      borderBottom: '1px solid transparent',
    },
  });

export default styles;
