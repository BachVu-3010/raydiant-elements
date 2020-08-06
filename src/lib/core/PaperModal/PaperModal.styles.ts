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

      [theme.breakpoints.down('xs')]: {
        top: '0 !important',
        left: '0 !important',
        height: '100vh !important',
        width: '100vw !important',
      },
    },

    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
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
      padding: theme.spacing(1, 4),
      color: theme.palette.text.secondary,
      opacity: 0.5,

      '&:hover, &:focus': {
        opacity: 1,
      },

      '& svg': {
        fontSize: 24,
      },

      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(1, 2),
      },
    },
  }),
);
