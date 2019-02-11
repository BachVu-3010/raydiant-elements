import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    accountSection: {
      marginTop: theme.spacing.unit * 2,
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
      },
    },
    accountSectionTitle: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing.unit * 2,
      },
    },
  });

export default styles;
