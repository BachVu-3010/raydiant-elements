import * as cn from 'classnames';
import * as React from 'react';
import Checkbox from '../Checkbox';
import withStyles, { WithStyles } from '../withStyles';
import styles from './MultiSelectFieldOption.styles';
import { SelectionOption } from '../../application/ApplicationTypes';

export interface MultiSelectFieldOptionProps extends WithStyles<typeof styles> {
  value: string;
  label: string;
  rightLabel?: string;
  // These props are injected by the parent MultiSelectField.
  disabled?: boolean;
  checked?: boolean;
  selected?: boolean;
  onClick?: () => void;
  onSelect?: (option: SelectionOption) => void;
}

const MultiSelectFieldOption: React.SFC<MultiSelectFieldOptionProps> = ({
  value,
  label,
  rightLabel,
  disabled = false,
  checked = false,
  selected = false,
  onClick,
  onSelect,
  classes,
}) => (
  <button
    className={cn(classes.root, disabled && classes.disabled)}
    onClick={e => {
      e.preventDefault();
      if (onSelect) {
        onSelect({ value, label, rightLabel });
      } else {
        onClick();
      }
    }}
    disabled={disabled}
  >
    <Checkbox
      className={classes.checkboxLabel}
      disabled={disabled}
      checked={checked}
      label={
        <span className={cn(classes.label, { [classes.selected]: selected })}>
          {// fix label highlighted state
          // The width is 0 when no label and rightLabel
          label ? label : <>&nbsp;</>}
          {rightLabel && (
            <span className={classes.rightLabel}>{rightLabel}</span>
          )}
        </span>
      }
      onCheckboxClick={
        onSelect &&
        (e => {
          e.stopPropagation();
          onClick();
        })
      }
    />
  </button>
);

export default withStyles(styles)(MultiSelectFieldOption);
