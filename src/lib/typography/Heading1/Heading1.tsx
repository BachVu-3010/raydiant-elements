import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import Typography, { TypographyStyleProps } from '../../internal/Typography';
import styles from './Heading1.styles';

export const Heading1: React.FunctionComponent<
  TypographyStyleProps & WithStyles<typeof styles>
> = ({ children, classes, ...props }) => (
  <Typography className={classes.root} tag="h1" {...props}>
    {children}
  </Typography>
);

export default withStyles(styles)(Heading1);
