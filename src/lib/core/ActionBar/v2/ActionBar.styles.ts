import { makeStyles, createStyles } from '../../../styles';
import { Theme } from '../../../theme';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.actionBar.background,
      border: `1px solid ${theme.actionBar.border}`,
      padding: theme.spacing(0.5, 1),
      borderRadius: theme.borderRadius.sm,
    },
  }),
);
