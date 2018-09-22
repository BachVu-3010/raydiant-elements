import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Title.styles';

interface TitleProps extends WithStyles<typeof styles> {}

export const Title: React.SFC<TitleProps> = ({ children, classes }) => (
  <span className={classes.root}>{children}</span>
);

export default withStyles(styles)(Title);
