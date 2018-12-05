import * as React from 'react';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

export interface AddDeviceLayoutProps extends WithStyles<typeof styles> {}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing.unit * 2,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('sm')]: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    addDeviceContainer: {
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        width: 400,
      },
    },
  });

export const AddDeviceLayout: React.SFC<AddDeviceLayoutProps> = ({
  classes,
  children,
}) => (
  <main className={classes.root}>
    <div className={classes.addDeviceContainer}>{children}</div>
  </main>
);

export default withStyles(styles)(AddDeviceLayout);
