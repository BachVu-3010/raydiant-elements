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
    },

    icon: {
      width: 32,
      height: 32,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      flexShrink: 0,
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
      top: theme.spacing.unit,
      left: theme.spacing.unit,
    },

    topRight: {
      position: 'absolute',
      top: theme.spacing.unit,
      right: theme.spacing.unit,
    },

    bottomLeft: {
      position: 'absolute',
      bottom: theme.spacing.unit,
      left: theme.spacing.unit,
    },

    error: {
      color: theme.palette.text.primary,
      display: 'flex',
      alignItems: 'center',

      [theme.breakpoints.up('sm')]: {
        '& > svg': {
          marginRight: theme.spacing.unit / 2,
        },
      },
    },

    errorMessage: {
      display: 'none',

      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  });

export default styles;
