import * as cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './Heading1.styles';

interface Heading1Props extends WithStyles<typeof styles> {
  textTruncate?: boolean;
}

export const Heading1: React.SFC<Heading1Props> = ({
  children,
  textTruncate = false,
  classes,
}) => (
  <span className={cn(classes.root, textTruncate && classes.textTruncate)}>
    {children}
  </span>
);

export default withStyles(styles)(Heading1);
