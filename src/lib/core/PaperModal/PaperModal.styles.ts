import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';
import { buttonReset } from '../../mixins';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: theme.borderRadius.lg,

      [theme.breakpoints.down('xs')]: {
        top: '0 !important',
        left: '0 !important',
        height: '100vh !important',
        width: '100vw !important',
        borderRadius: 0,

        // Fix for fixed position elements on iOS Safari being covered by the bottom action bar.
        '&': {
          height: '-webkit-fill-available !important',
        },
      },
    },

    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    title: {
      // Align with close button.
      paddingLeft: theme.spacing(4),
      paddingTop: theme.spacing(0.75),
    },

    close: {
      ...buttonReset(),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      fontWeight: 600,
      lineHeight: 1.11,
      letterSpacing: 1.42,
      textTransform: 'uppercase',
      fontSize: theme.fontSizes.xxs,
      padding: theme.spacing(0.75, 4),
      paddingBottom: 0,
      color: theme.palette.text.secondary,
      opacity: 0.5,

      '&:hover, &:focus': {
        opacity: 1,
      },

      '& svg': {
        fontSize: 20,
      },

      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(1),
      },
    },
  }),
);
