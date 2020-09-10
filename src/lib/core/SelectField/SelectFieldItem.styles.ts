import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';

export default makeStyles((theme: Theme) =>
  createStyles({
    thumbnail: {
      marginRight: theme.spacing(1),
      height: 20,
      width: 20,
    },
  }),
);
