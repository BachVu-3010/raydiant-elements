import * as cn from 'classnames';
import * as React from 'react';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import { scrollable } from '../../mixins';

const styles = () =>
  createStyles({
    root: {
      flex: 1,
      ...scrollable(),
    },
  });

export interface ScrollableProps extends WithStyles<typeof styles> {}

export const Scrollable: React.SFC<ScrollableProps> = ({
  children,
  classes,
}) => {
  return <div className={cn(classes.root)}>{children}</div>;
};

export default withStyles(styles)(Scrollable);
