import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      cursor: 'pointer',
      textDecoration: 'none',
      outline: 'none',
      color: theme.menu.foreground,
      fontSize: theme.fontSizes.sm,
      padding: theme.spacing(1, 0),

      '& + &': {
        marginLeft: theme.spacing(4),
      },
    },

    active: {
      '&:after': {
        content: '" "',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 3,
        backgroundColor: theme.menu.underline,
        borderRadius: theme.borderRadius.md,
      },
    },
  });

export default styles;
