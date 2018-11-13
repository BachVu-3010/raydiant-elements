import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      cursor: 'pointer',
      userSelect: 'none',
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      background: theme.palette.background.default,
      border: '1px solid transparent',
      marginTop: '-1px',
      borderTopColor: 'rgba(0, 0, 0, 0.2)',
      '&:last-child': {
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
      },
      [theme.breakpoints.up('sm')]: {
        '&:first-child': {
          borderTopColor: 'transparent',
          borderTopLeftRadius: theme.spacing.unit,
          borderTopRightRadius: theme.spacing.unit,
        },
        '&:last-child': {
          borderBottomLeftRadius: theme.spacing.unit,
          borderBottomRightRadius: theme.spacing.unit,
        },
      },
    },
    deviceContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    deviceName: {
      fontSize: theme.fontSizes.lg,
      marginBottom: theme.spacing.unit / 2,
    },
    selected: {
      borderColor: theme.palette.primary.main + ' !important',
      position: 'relative',

      zIndex: 1,
    },
  });

export default styles;
