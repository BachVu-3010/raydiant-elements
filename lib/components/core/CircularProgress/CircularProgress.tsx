import MUICircularProgress from '@material-ui/core/CircularProgress';
import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './CircularProgress.styles';

interface CircularProgressProps extends WithStyles<typeof styles> {
  value?: number;
  min?: number;
  max?: number;
  size?: number;
}

export const CircularProgress: React.SFC<CircularProgressProps> = ({
  value,
  min = 0,
  max = 100,
  size = 20,
  classes,
}) => (
  <MUICircularProgress
    className={classes.root}
    size={size}
    variant={value !== undefined ? 'determinate' : 'indeterminate'}
    value={((value - min) * 100) / (max - min)}
  />
);

export default withStyles(styles)(CircularProgress);
