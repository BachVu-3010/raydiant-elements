import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      background: theme.palette.background.default,
      borderBottom: '1px solid rgba(0, 0, 0, 0.2)',

      '&:first-child': {
        borderTopLeftRadius: theme.spacing.unit,
        borderTopRightRadius: theme.spacing.unit,
      },

      '&:last-child': {
        borderBottomLeftRadius: theme.spacing.unit,
        borderBottomRightRadius: theme.spacing.unit,
      },

      [theme.breakpoints.down('xs')]: {
        '&:first-child, &:last-child': {
          borderRadius: 0,
        },
      },
    },

    deviceInfo: {
      flex: 1,
    },

    deviceActions: {
      flex: 1,
      justifyContent: 'flex-end',
    },

    thumbnail: {
      width: 128,
      height: 72,
      flexShrink: 0,
      position: 'relative',
      background: 'rgba(0,0,0,1)',
      backgroundSize: '100% 100%',
      backgroundPositionX: 'center',
      backgroundPositionY: 'center',
      backgroundRepeat: 'no-repeat',
      boxShadow: theme.shadows[1],
    },

    name: {
      fontSize: theme.fontSizes.lg,
      marginBottom: theme.spacing.unit,

      [theme.breakpoints.down('xs')]: {
        marginBottom: 0,
      },
    },
  });

export default styles;
