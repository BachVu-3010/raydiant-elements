import cn from 'classnames';
import ErrorIcon from '@material-ui/icons/Error';
import * as React from 'react';
import Icon from '../Icon';
import withStyles, { WithStyles } from '../withStyles';
import styles from './AlertIcon.styles';

interface AlertIconProps extends WithStyles<typeof styles> {
  className?: string;
  color?: 'default' | 'error' | 'warning';
}

export const AlertIcon: React.SFC<AlertIconProps> = ({
  color = 'error',
  classes,
  className,
}) => {
  if (color === 'error') {
    return <ErrorIcon className={cn(classes.icon, classes.error, className)} />;
  }

  if (color === 'warning') {
    return (
      <ErrorIcon className={cn(classes.icon, classes.warning, className)} />
    );
  }

  return (
    <Icon
      icon="alert"
      className={cn(classes.icon, classes.default, className)}
    />
  );
};

export default withStyles(styles)(AlertIcon);
