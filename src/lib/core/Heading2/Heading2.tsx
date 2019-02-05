import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Heading2.styles';

interface Heading2Props extends WithStyles<typeof styles> {}

export const Heading2: React.SFC<Heading2Props> = ({ children, classes }) => (
  <span className={classes.root}>{children}</span>
);

export default withStyles(styles)(Heading2);
