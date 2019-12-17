import MUICardContent from '@material-ui/core/CardContent';
import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './CardContent.styles';

export interface CardContentProps extends WithStyles<typeof styles> {
  onClick?: (event: React.MouseEvent<any>) => any;
  children?: React.ReactNode;
}

export const CardContent: React.SFC<CardContentProps> = ({
  children,
  onClick = () => {
    return;
  },
  classes,
}) => (
  <MUICardContent onClick={onClick} classes={classes}>
    {children}
  </MUICardContent>
);

export default withStyles(styles)(CardContent);
