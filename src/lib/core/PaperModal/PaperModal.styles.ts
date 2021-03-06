import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';

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

      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(1),
      },
    },
  }),
);
