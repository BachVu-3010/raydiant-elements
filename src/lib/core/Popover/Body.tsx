import * as React from 'react';
import withStyles, { createStyles, WithStyles } from '../withStyles';

const styles = () =>
  createStyles({
    root: {
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      maxHeight: '256px',
    },
  });

export interface BodyProps extends WithStyles<typeof styles> {}

const Body: React.SFC<BodyProps> = props => {
  const { children, classes } = props;
  return <div className={classes.root}>{children}</div>;
};

export default withStyles(styles)(Body);
