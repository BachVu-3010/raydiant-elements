import cn from 'classnames';
import * as React from 'react';
import Icon from '../Icon';
import withStyles, { WithStyles } from '../withStyles';
import styles from './AlertIcon.styles';

interface AlertIconProps extends WithStyles<typeof styles> {
  color?: 'default' | 'error' | 'warning';
  title?: string;
}

export const AlertIcon: React.SFC<AlertIconProps> = ({
  color = 'error',
  title,
  classes,
}) => (
  <Icon
    icon="alert"
    title={title}
    className={cn(
      classes.icon,
      color === 'default' && classes.default,
      color === 'error' && classes.error,
      color === 'warning' && classes.warning,
    )}
  />
);

export default withStyles(styles)(AlertIcon);
