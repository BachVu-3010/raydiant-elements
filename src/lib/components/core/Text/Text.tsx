import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './Text.styles';

interface TextProps extends WithStyles<typeof styles> {
  muted?: boolean;
  small?: boolean;
}

export const Text: React.SFC<TextProps> = ({
  muted,
  small,
  children,
  classes,
}) => (
  <span
    className={cn(classes.root, muted && classes.muted, small && classes.small)}
  >
    {children}
  </span>
);

export default withStyles(styles)(Text);
