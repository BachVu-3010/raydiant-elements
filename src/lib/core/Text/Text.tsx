import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './Text.styles';

interface TextProps extends WithStyles<typeof styles> {
  center?: boolean;
  muted?: boolean;
  small?: boolean;
  strikethrough?: boolean;
}

export const Text: React.SFC<TextProps> = ({
  center,
  muted,
  small,
  strikethrough,
  children,
  classes,
}) => (
  <span
    className={cn(
      classes.root,
      muted && classes.muted,
      small && classes.small,
      strikethrough && classes.strikethrough,
      center && classes.center,
    )}
  >
    {children}
  </span>
);

export default withStyles(styles)(Text);
