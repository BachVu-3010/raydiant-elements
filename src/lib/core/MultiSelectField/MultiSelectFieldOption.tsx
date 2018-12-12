import * as cn from 'classnames';
import * as React from 'react';
import Checkbox from '../Checkbox';
import withStyles, { WithStyles } from '../withStyles';
import styles from './MultiSelectFieldOption.styles';

export interface MultiSelectFieldOptionProps extends WithStyles<typeof styles> {
  value: string;
  label: string;
  // These props are injected by the parent MultiSelectField.
  disabled?: boolean;
  checked?: boolean;
  onClick?: () => void;
}

const MultiSelectFieldOption: React.SFC<MultiSelectFieldOptionProps> = ({
  label,
  disabled = false,
  checked = false,
  onClick,
  classes,
}) => (
  <button
    className={cn(classes.root, disabled && classes.disabled)}
    onClick={onClick}
    disabled={disabled}
  >
    <Checkbox
      disabled={disabled}
      checked={checked}
      label={label}
      onClick={e => e.preventDefault()}
    />
  </button>
);

export default withStyles(styles)(MultiSelectFieldOption);
