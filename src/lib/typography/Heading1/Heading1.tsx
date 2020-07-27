import * as React from 'react';
import * as cn from 'classnames';
import withStyles, { WithStyles } from '../../core/withStyles';
import Typography, { TypographyProps } from '../../internal/Typography';
import styles from './Heading1.styles';

export const Heading1: React.FunctionComponent<
  TypographyProps & WithStyles<typeof styles>
> = ({ children, classes, className, ...props }) => (
  <Typography className={cn(classes.root, className)} tag="h1" {...props}>
    {children}
  </Typography>
);

export default withStyles(styles)(Heading1);
