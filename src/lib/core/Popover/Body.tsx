import * as React from 'react';
import Scrollable from '../../layout/Scrollable';
import withStyles, { createStyles, WithStyles } from '../withStyles';

const styles = () =>
  createStyles({
    root: {
      // For IE11 it's necessary to set the maxHeight on the scrollable element.
      // Originally we had a maxHeight of 320px on the popover container, so we are
      // substracting the height of the popover header (~56px) from 320px to get 264px.
      maxHeight: 264,
    },
  });

export interface BodyProps extends WithStyles<typeof styles> {}

const Body: React.SFC<BodyProps> = props => {
  const { children, classes } = props;
  return <Scrollable className={classes.root}>{children}</Scrollable>;
};

export default withStyles(styles)(Body);
