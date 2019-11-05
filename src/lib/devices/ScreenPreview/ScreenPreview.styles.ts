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
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,

      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing.unit * 4,
        marginBottom: theme.spacing.unit * 4,
        marginLeft: theme.spacing.unit * 4,
        marginRight: theme.spacing.unit * 4,
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
      marginTop: theme.spacing.unit * 2,
    },

    screenName: {
      fontSize: theme.fontSizes.lg,
      color: theme.palette.text.primary,
      fontWeight: 400,
      marginTop: 0,
      marginBottom: theme.spacing.unit * 2,

      [heightUpBp]: {
        fontSize: theme.fontSizes.xl,
        fontWeight: 300,
      },
    },

    presentationName: {
      color: theme.palette.text.primary,
      fontSize: theme.fontSizes.md,
      marginBottom: theme.spacing.unit,
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
