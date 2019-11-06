import * as React from 'react';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import { Theme } from '../../theme';
import Column from '../Column';

export interface CenterProps extends WithStyles<typeof styles> {}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingRight: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      flex: 1,
    },
  });

export const Center: React.SFC<CenterProps> = ({ classes, children }) => (
  <Column className={classes.root}>{children}</Column>
);

export default withStyles(styles)(Center);
