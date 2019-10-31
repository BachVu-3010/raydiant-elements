import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './InputBackground.styles';

interface InputBackgroundProps extends WithStyles<typeof styles> {
  multiline?: boolean;
}

const InputBackground: React.SFC<InputBackgroundProps> = ({
  multiline,
  children,
  classes,
}) => (
  <div className={cn(classes.root, multiline && classes.multiline)}>
    {children}
  </div>
);

export default withStyles(styles)(InputBackground);
