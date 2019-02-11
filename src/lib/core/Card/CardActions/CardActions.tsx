import MUICardActions from '@material-ui/core/CardActions';
import * as React from 'react';
import withStyles, { WithStyles } from '../../withStyles';
import styles from './CardActions.styles';

export interface CardActionsProps extends WithStyles<typeof styles> {
  onClick?: (event: React.MouseEvent<any>) => any;
}

export const CardActions: React.SFC<CardActionsProps> = ({
  children,
  onClick = () => {
    return;
  },
  classes,
}) => (
  <MUICardActions onClick={onClick} classes={classes}>
    {children}
  </MUICardActions>
);

export default withStyles(styles)(CardActions);
