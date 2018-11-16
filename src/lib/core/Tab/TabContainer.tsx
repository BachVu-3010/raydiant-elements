import * as cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './TabContainer.styles';

export interface TabContainerProps extends WithStyles<typeof styles> {
  inline?: boolean;
}

const TabContainer: React.SFC<TabContainerProps> = ({
  children,
  classes,
  inline,
}) => (
  <div className={cn(classes.root, inline && classes.inline)}>{children}</div>
);

export default withStyles(styles)(TabContainer);
