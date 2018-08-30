import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './OneThirdLayoutColumnSmall.styles';

export interface OneThirdLayoutColumnSmallProps
  extends WithStyles<typeof styles> {}

export const OneThirdLayoutColumnSmall: React.SFC<
  OneThirdLayoutColumnSmallProps
> = ({ children, classes }) => <div className={classes.root}>{children}</div>;

export default withStyles(styles)(OneThirdLayoutColumnSmall);
