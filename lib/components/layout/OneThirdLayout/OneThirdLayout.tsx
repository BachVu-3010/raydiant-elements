import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './OneThirdLayout.styles';
import OneThirdLayoutColumnLarge from './OneThirdLayoutColumnLarge';
import OneThirdLayoutColumnSmall from './OneThirdLayoutColumnSmall';

interface OneThirdLayoutProps extends WithStyles<typeof styles> {}

export const OneThirdLayout: React.SFC<OneThirdLayoutProps> = ({
  children,
  classes,
}) => <div className={classes.root}>{children}</div>;

export default Object.assign(withStyles(styles)(OneThirdLayout), {
  ColumnSmall: OneThirdLayoutColumnSmall,
  ColumnLarge: OneThirdLayoutColumnLarge,
});
