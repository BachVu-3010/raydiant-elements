import * as React from 'react';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import Column from '../../layout/Column/index';
import { Theme } from '../../theme';

export interface GroupProps extends WithStyles<typeof styles> {}
const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      padding: theme.spacing.unit * 2,
    },
  });

export const Group: React.SFC<GroupProps> = ({ children, classes }) => (
  <Column className={classes.root}>{children}</Column>
);

export default withStyles(styles)(Group);
