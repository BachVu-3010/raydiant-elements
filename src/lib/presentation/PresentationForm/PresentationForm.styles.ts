import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';

export default makeStyles((theme: Theme) =>
  createStyles({
    inputs: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  }),
);
