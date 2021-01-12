import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      background: theme.palette.background.default,
      color: theme.palette.text.primary,

      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        flexDirection: 'column',
      },
    },

    main: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 192,
      marginTop: theme.spacing(2),

      [theme.breakpoints.up('sm')]: {
        flex: 1,
        height: 'auto',
        margin: theme.spacing(2),
      },

      [theme.breakpoints.up('md')]: {
        margin: theme.spacing(4),
      },
    },

    previewContainer: {
      flex: 1,
      width: '100%',
      position: 'relative',
      // Needed for Edge to prevent scroll bars.
      overflow: 'hidden',
    },

    preview: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      background: '#000',
      boxShadow: theme.shadows[1],
      transformOrigin: 'top left',
      overflow: 'hidden',
    },

    previewBorder: {
      border: '8px solid #0f0f14',
    },

    footer: {
      display: 'flex',
      alignItems: 'stretch',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },

    app: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '14px 20px 14px 0',
    },

    appIcon: {
      flexShrink: 0,
      height: theme.spacing(6),
      width: theme.spacing(6),
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
      marginBottom: theme.spacing(1),
    },
  }),
);
