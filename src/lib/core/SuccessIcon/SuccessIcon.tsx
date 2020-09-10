import * as cn from 'classnames';
import * as React from 'react';
import Icon from '../Icon';
import withStyles, { WithStyles } from '../withStyles';
import styles from './SuccessIcon.styles';

interface SuccessIconProps extends WithStyles<typeof styles> {
  title?: string;
  className?: string;
}

export const SuccessIcon: React.SFC<SuccessIconProps> = ({
  title,
  classes,
  className,
}) => (
  <Icon
    icon="checkmark"
    title={title}
    className={cn(classes.icon, className)}
  />
);

export default withStyles(styles)(SuccessIcon);
