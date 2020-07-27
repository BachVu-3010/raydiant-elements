import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

export const ScreenPreviewMinHeight = 400;
const heightUpBp = `@media screen and (min-height: ${ScreenPreviewMinHeight}px)`;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),

      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
      },
    },

    header: {
      display: 'flex',
      alignItems: 'flex-end',
    },

    footer: {
      display: 'flex',
      flexDirection: 'column',
      height: '3rem',
      marginTop: theme.spacing(2),
    },

    screenName: {
      fontSize: theme.fontSizes.lg,
      color: theme.palette.text.primary,
      fontWeight: 400,
      marginTop: 0,
      marginBottom: theme.spacing(2),

      [heightUpBp]: {
        fontSize: theme.fontSizes.xxl,
        fontWeight: 300,
      },
    },

    presentationName: {
      color: theme.palette.text.primary,
      fontSize: theme.fontSizes.md,
      marginBottom: theme.spacing(1),
    },

    applicationName: {
      color: theme.palette.text.secondary,
      fontSize: theme.fontSizes.sm,
    },

    preview: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

      [theme.breakpoints.up('sm')]: {
        flex: 1,
      },
    },

    screen: {
      border: '2px solid #000',
      backgroundColor: '#202020',
    },
  });

export default styles;
