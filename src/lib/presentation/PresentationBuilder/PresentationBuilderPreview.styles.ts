import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
    },

    preview: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 192,
      marginTop: theme.spacing.unit * 2,

      [theme.breakpoints.up('sm')]: {
        flex: 1,
        height: 'auto',
        margin: 30,
      },
    },

    footer: {
      display: 'flex',
      alignItems: 'stretch',
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
    },

    app: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '14px 20px 14px 0',
    },

    appIcon: {
      flexShrink: 0,
      height: theme.spacing.unit * 6,
      width: theme.spacing.unit * 6,
      borderRadius: 10,
      overflow: 'hidden',
      marginRight: 12,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: '#000',
      // Fixes webkit bug with overflow hidden and border-radius
      // https://stackoverflow.com/a/37614307/1249098
      transform: 'translateY(0)',
    },

    appName: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize,
      lineHeight: 1.71,
      color: theme.palette.text.secondary,
    },

    appDescription: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.fontSizes.sm,
      marginBottom: theme.spacing.unit,
    },
  });

export default styles;
