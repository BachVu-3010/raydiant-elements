import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './OneThirdLayout.styles';
import OneThirdLayoutColumnLarge from './OneThirdLayoutColumnLarge';
import OneThirdLayoutColumnSmall from './OneThirdLayoutColumnSmall';

interface OneThirdLayoutProps extends WithStyles<typeof styles> {
  className?: string;
}

export const OneThirdLayout: React.SFC<OneThirdLayoutProps> = ({
  className,
  children,
  classes,
}) => <div className={cn(classes.root, className)}>{children}</div>;

export default Object.assign(withStyles(styles)(OneThirdLayout), {
  ColumnSmall: OneThirdLayoutColumnSmall,
  ColumnLarge: OneThirdLayoutColumnLarge,
});
