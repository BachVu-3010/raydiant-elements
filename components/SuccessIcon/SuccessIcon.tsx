import * as React from 'react';
import Icon from '../Icon';
import withStyles, { WithStyles } from '../withStyles';
import styles from './SuccessIcon.styles';

interface SuccessIconProps extends WithStyles<typeof styles> {
  title?: string;
}

export const SuccessIcon: React.SFC<SuccessIconProps> = ({
  title,
  classes,
}) => <Icon icon="checkmark" title={title} className={classes.icon} />;

export default withStyles(styles)(SuccessIcon);
