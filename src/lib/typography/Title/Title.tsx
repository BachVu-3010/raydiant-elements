import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import Typography from '../../internal/Typography';
import styles from './Title.styles';

interface TitleProps extends WithStyles<typeof styles> {}

export const Title: React.SFC<TitleProps> = ({ children, classes }) => (
  <Typography tag="h1" className={classes.root}>
    {children}
  </Typography>
);

export default withStyles(styles)(Title);
