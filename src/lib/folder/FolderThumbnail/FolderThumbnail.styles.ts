import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const dropShadowFilter = `drop-shadow(0px 2px 1px rgba(0,0,0,0.2)) drop-shadow(0px 1px 3px rgba(0,0,0,0.14)) drop-shadow(0px 3px 6px rgba(0,0,0,0.12))`;

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
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundClip: 'padding-box',
      backgroundImage: 'url(https://assets.raydiant.com/folder-thumbnail.svg)',
      filter: dropShadowFilter,
    },

    clickable: {
      cursor: 'pointer',
    },

    overlay: {
      filter: `${dropShadowFilter} brightness(0.5)`,
    },

    topLeft: {
      position: 'absolute',
      top: theme.spacing(1),
      left: theme.spacing(1),
    },
  });

export default styles;
