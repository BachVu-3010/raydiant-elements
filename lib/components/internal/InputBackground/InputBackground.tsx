import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './InputBackground.styles';

interface InputBackgroundProps extends WithStyles<typeof styles> {}

const InputBackground: React.SFC<InputBackgroundProps> = ({
  children,
  classes,
}) => <div className={classes.root}>{children}</div>;

export default withStyles(styles)(InputBackground);
