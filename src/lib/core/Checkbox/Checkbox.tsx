import MUICheckbox from '@material-ui/core/Checkbox';
import cn from 'classnames';
import * as React from 'react';
import Icon from '../Icon';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Checkbox.styles';

interface CheckboxProps extends WithStyles<typeof styles> {
  checked: boolean;
  label?: string;
  round?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  onClick?: (e: React.MouseEvent<any>) => void;
}

export const Checkbox: React.SFC<CheckboxProps> = ({
  checked,
  label,
  round,
  disabled,
  classes,
  onClick,
  onChange,
}) => {
  const checkbox = (
    <span className={classes.checkboxContainer}>
      <MUICheckbox
        checked={checked}
        disabled={disabled}
        onChange={e => {
          if (onChange) {
            onChange(e.target.checked);
          }
        }}
        onClick={!label ? onClick : null}
        color="primary"
        icon={
          <div
            className={cn(
              classes.iconContainer,
              disabled && classes.iconDisabled,
              round && classes.round,
            )}
          />
        }
        checkedIcon={
          <div
            className={cn(
              classes.iconContainer,
              classes.iconChecked,
              disabled && classes.iconDisabled,
              disabled && classes.iconCheckedDisabled,
              round && classes.round,
            )}
          >
            <Icon icon="checkmark" className={classes.icon} />
          </div>
        }
        classes={{ root: classes.checkbox }}
      />
    </span>
  );

  if (label) {
    return (
      <label
        className={cn(
          classes.labelContainer,
          disabled && classes.labelDisabled,
        )}
        onClick={onClick}
      >
        {checkbox}
        <span className={classes.label}>{label}</span>
      </label>
    );
  }

  return checkbox;
};

export default withStyles(styles)(Checkbox);
