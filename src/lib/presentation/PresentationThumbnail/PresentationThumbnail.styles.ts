import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      paddingTop: `${100 / (16 / 9)}%`, // Preserve a 16:9 aspect ratio
    },

    image: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: '#000',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundClip: 'padding-box',
    },

    icon: {
      width: 32,
      height: 32,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },

    overlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background: theme.modal.overlayBackground,
    },

    clickable: {
      cursor: 'pointer',
    },

    topLeft: {
      position: 'absolute',
      top: theme.spacing(1),
      left: theme.spacing(1),
    },

    topRight: {
      position: 'absolute',
      top: theme.spacing(1),
      right: theme.spacing(1),
    },

    bottomLeft: {
      position: 'absolute',
      bottom: theme.spacing(1),
      left: theme.spacing(1),
    },

    error: {
      color: theme.palette.text.primary,
      display: 'flex',
      alignItems: 'center',

      [theme.breakpoints.up('sm')]: {
        '& > svg': {
          flexShrink: 0,
          marginRight: theme.spacing(0.5),
        },
      },
    },

    errorMessage: {
      display: 'none',
      fontSize: theme.fontSizes.sm,

      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  });

export default styles;
