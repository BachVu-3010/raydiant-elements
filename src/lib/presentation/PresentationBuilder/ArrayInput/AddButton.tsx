import * as cn from 'classnames';
import * as React from 'react';
import Icon from '../../../core/Icon';
import withStyles, { WithStyles } from '../../../core/withStyles';
import styles from './AddButton.styles';

interface AddButtonProps extends WithStyles<typeof styles> {
  label: string;
  disabled?: boolean;
  onClick: () => any;
}

const AddButton: React.SFC<AddButtonProps> = ({
  classes,
  label,
  disabled,
  onClick,
}) => (
  <button
    className={cn(classes.root, disabled && classes.disabled)}
    onClick={onClick}
    disabled={disabled}
  >
    <Icon icon="add" />
    {label}
  </button>
);

export default withStyles(styles)(AddButton);
