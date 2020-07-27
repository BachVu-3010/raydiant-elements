import { makeStyles, createStyles } from '../../../styles';
import { Theme } from '../../../theme';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    selected: {
      backgroundColor: theme.palette.action.selected,
    },
  }),
);
