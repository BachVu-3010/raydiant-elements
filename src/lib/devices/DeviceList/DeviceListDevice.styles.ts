import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      background: theme.palette.background.default,
      borderBottom: `1px solid ${theme.palette.action.selected}`,

      '&:first-child': {
        borderTopLeftRadius: theme.spacing(1),
        borderTopRightRadius: theme.spacing(1),
      },

      '&:last-child': {
        borderBottomLeftRadius: theme.spacing(1),
        borderBottomRightRadius: theme.spacing(1),
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
      marginBottom: theme.spacing(1),

      [theme.breakpoints.down('xs')]: {
        marginBottom: 0,
      },
    },
  });

export default styles;
