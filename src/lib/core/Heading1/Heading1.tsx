import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './Heading1.styles';

interface Heading1Props extends WithStyles<typeof styles> {}

export const Heading1: React.SFC<Heading1Props> = ({ children, classes }) => (
  <span className={classes.root}>{children}</span>
);

export default withStyles(styles)(Heading1);
