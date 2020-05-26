import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    dropdown: {
      zIndex: theme.zIndex.menu,
    },

    paper: {
      backgroundColor: theme.palette.background.default,
    },

    menuList: {
      padding: 0,
    },
  });

export default styles;
