import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './ThemeBackground.styles';

interface ThemeBackgroundProps extends WithStyles<typeof styles> {
  className?: string;
}

const ThemeBackground: React.SFC<ThemeBackgroundProps> = ({
  className,
  children,
  classes,
}) => <div className={cn(classes.root, className)}>{children}</div>;

export default withStyles(styles)(ThemeBackground);
