import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import Typography, { TypographyStyleProps } from '../../internal/Typography';
import styles from './Heading2.styles';

export const Heading2: React.FunctionComponent<
  TypographyStyleProps & WithStyles<typeof styles>
> = ({ children, classes, ...props }) => (
  <Typography className={classes.root} tag="h2" {...props}>
    {children}
  </Typography>
);

export default withStyles(styles)(Heading2);
