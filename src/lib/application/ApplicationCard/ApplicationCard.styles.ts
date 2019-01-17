import { createStyles } from '../../core/withStyles';
import { buttonReset } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: theme.spacing.unit * 24,
    },

    smDownShrink: {
      width: theme.spacing.unit * 16,

      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 24,
      },
    },

    auto: {
      width: '100%',
      maxWidth: theme.spacing.unit * 24,
    },

    thumbnail: {
      ...buttonReset(),
      position: 'relative',
      width: '100%',
      paddingTop: `${100 / (16 / 9)}%`, // Preserve a 16:9 aspect ratio
      boxShadow: theme.shadows[1],
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

    name: {
      marginTop: theme.spacing.unit,
      fontSize: theme.fontSizes.sm,
      textAlign: 'center',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  });

export default styles;
