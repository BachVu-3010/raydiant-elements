import { createStyles } from '../../core/withStyles';
import { buttonReset, textTruncate } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: theme.spacing(18),

      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(24),
      },
    },

    auto: {
      width: '100%',
      maxWidth: theme.spacing(24),
    },

    thumbnail: {
      ...buttonReset(),
      position: 'relative',
      width: '100%',
      paddingTop: `${100 / (16 / 9)}%`, // Preserve a 16:9 aspect ratio
      boxShadow: theme.shadows[3],
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

    cta: {
      marginTop: theme.spacing(1),
      fontSize: theme.fontSizes.sm,
      textAlign: 'center',
      ...textTruncate(),
    },

    website: {
      marginTop: theme.spacing(1),
      fontSize: theme.fontSizes.sm,
      textAlign: 'center',
    },
  });

export default styles;
