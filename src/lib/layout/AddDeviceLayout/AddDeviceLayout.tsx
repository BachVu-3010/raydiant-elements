import * as React from 'react';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

export interface AddDeviceLayoutProps extends WithStyles<typeof styles> {}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px`,

      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing.unit * 4,
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  });

export const AddDeviceLayout: React.SFC<AddDeviceLayoutProps> = ({
  classes,
  children,
}) => <main className={classes.root}>{children}</main>;

export default withStyles(styles)(AddDeviceLayout);
