import { Theme } from '../../../theme';
import { createStyles } from '../../core/withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      boxSizing: 'border-box',
      width: '100%',
      height: 68,
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      boxShadow: theme.titlebar.border
        ? `inset 0 -1px 0 0 ${theme.titlebar.border}`
        : '',

      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
      },
    },
  });

export default styles;
