import * as cn from 'classnames';
import * as React from 'react';
import Icon from '../../../core/Icon';
import withStyles, { WithStyles } from '../../../core/withStyles';
import styles from './RemoveButton.styles';

interface RemoveButtonProps extends WithStyles<typeof styles> {
  onClick: () => any;
  disabled?: boolean;
}

const RemoveButton: React.SFC<RemoveButtonProps> = ({
  classes,
  onClick,
  disabled,
}) => (
  <button
    className={cn(classes.root, disabled && classes.disabled)}
    onClick={onClick}
    disabled={disabled}
  >
    <Icon icon="trash" />
  </button>
);

export default withStyles(styles)(RemoveButton);
