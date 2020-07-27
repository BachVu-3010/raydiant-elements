import { makeStyles, createStyles } from '../../../styles';
import { Theme } from '../../../theme';

export default makeStyles((theme: Theme) =>
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
  }),
);
