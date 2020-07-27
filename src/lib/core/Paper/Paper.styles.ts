import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,

      [theme.breakpoints.down('xs')]: {
        borderRadius: 0,
      },
    },
  }),
);
