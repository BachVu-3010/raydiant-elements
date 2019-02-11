import MUIPaper from '@material-ui/core/Paper';
import * as cn from 'classnames';
import * as React from 'react';
import withThemeSelector from '../../core/withThemeSelector';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Card.styles';
import CardActions from './CardActions';
import CardContent from './CardContent';

interface CardProps extends WithStyles<typeof styles> {
  fullWidth?: boolean;
  raised?: boolean;
  onClick?: (event: React.MouseEvent<any>) => any;
}

export const Card: React.SFC<CardProps> = ({
  fullWidth = false,
  raised = false,
  children,
  onClick = () => {
    return;
  },
  classes,
}) => (
  <MUIPaper
    elevation={raised ? 1 : 0}
    onClick={onClick}
    classes={{
      root: cn(classes.card, fullWidth && classes.fullWidth),
    }}
  >
    {children}
  </MUIPaper>
);

export default Object.assign(withThemeSelector(withStyles(styles)(Card)), {
  Actions: CardActions,
  Content: CardContent,
});
