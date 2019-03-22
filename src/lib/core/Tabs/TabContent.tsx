import * as cn from 'classnames';
import * as React from 'react';
import { scrollable } from '../../mixins/index';
import withStyles, { createStyles, WithStyles } from '../withStyles';

const styles = () =>
  createStyles({
    root: {
      flex: 1,
      ...scrollable(),
    },
  });

export interface TabContentProps extends WithStyles<typeof styles> {}

export const TabContent: React.SFC<TabContentProps> = ({
  children,
  classes,
}) => {
  return <div className={cn(classes.root)}>{children}</div>;
};

export default withStyles(styles)(TabContent);
