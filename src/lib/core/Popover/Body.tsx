import * as React from 'react';
import { scrollable } from '../../mixins';
import withStyles, { createStyles, WithStyles } from '../withStyles';

const styles = () =>
  createStyles({
    root: {
      flex: 1,
      ...scrollable(),
    },
  });

export interface BodyProps extends WithStyles<typeof styles> {}

const Body: React.SFC<BodyProps> = props => {
  const { children, classes } = props;
  return <div className={classes.root}>{children}</div>;
};

export default withStyles(styles)(Body);
