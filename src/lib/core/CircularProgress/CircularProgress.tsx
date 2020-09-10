import MUICircularProgress from '@material-ui/core/CircularProgress';
import * as React from 'react';
import cn from 'classnames';
import withStyles, { WithStyles } from '../withStyles';
import styles from './CircularProgress.styles';

interface CircularProgressProps extends WithStyles<typeof styles> {
  value?: number;
  min?: number;
  max?: number;
  size?: number;
  color?: 'default' | 'light';
}

export const CircularProgress: React.SFC<CircularProgressProps> = ({
  value,
  min = 0,
  max = 100,
  size = 20,
  color = 'default',
  classes,
}) => (
  <MUICircularProgress
    className={cn(classes.root, color === 'light' && classes.light)}
    size={size}
    variant={value !== undefined ? 'determinate' : 'indeterminate'}
    value={((value - min) * 100) / (max - min)}
  />
);

export default withStyles(styles)(CircularProgress);
