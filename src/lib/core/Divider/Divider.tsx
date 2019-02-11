import MUIDivider from '@material-ui/core/Divider';
import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Divider.styles';

interface DividerProps extends WithStyles<typeof styles> {
  children?: React.ReactNode;
  light?: boolean;
}

export const Divider: React.SFC<DividerProps> = ({
  classes,
  light = false,
}) => <MUIDivider classes={classes} light={light} />;

export default withStyles(styles)(Divider);
