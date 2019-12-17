import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './CardHeading.styles';

export interface CardHeadingProps extends WithStyles<typeof styles> {
  children?: React.ReactNode;
}

export const CardHeading: React.SFC<CardHeadingProps> = ({
  children,
  classes,
}) => <div className={classes.root}>{children}</div>;

export default withStyles(styles)(CardHeading);
