import MUIPaper from '@material-ui/core/Paper';
import cn from 'classnames';
import * as React from 'react';
import { testAttr } from '../../helpers';
import CheckboxIcon from './CheckboxIcon';
import useStyles from './Checkbox.styles';

interface CheckboxProps {
  checked: boolean;
  label?: React.ReactNode;
  indeterminate?: boolean;
  round?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  onClick?: (e: React.MouseEvent<any>) => void;
  onCheckboxClick?: (e: React.MouseEvent<any>) => void;
  className?: string;
  testId?: string;
}

export const Checkbox: React.SFC<CheckboxProps> = ({
  className,
  checked,
  indeterminate = false,
  label,
  round,
  disabled,
  onClick,
  onCheckboxClick,
  onChange,
  testId,
}) => {
  const classes = useStyles();

  const checkbox = (
    <MUIPaper
      className={cn(
        classes.inputContainer,
        disabled && classes.disabled,
        round && classes.round,
        indeterminate && classes.indeterminate,
        !label && className,
      )}
      elevation={0}
    >
      <input
        type="checkbox"
        className={classes.input}
        checked={checked}
        disabled={disabled}
        onChange={e => {
          if (onChange) {
            onChange(e.target.checked);
          }
        }}
        onClick={e => {
          if (onCheckboxClick) onCheckboxClick(e);
          else if (!label && onClick) onClick(e);
        }}
        {...testAttr(testId)}
      />
      <div
        className={cn(
          classes.checkbox,
          (checked || indeterminate) && classes.checked,
          indeterminate && classes.indeterminate,
        )}
      >
        {(checked || indeterminate) && (
          <CheckboxIcon indeterminate={indeterminate} round={round} />
        )}
      </div>
    </MUIPaper>
  );

  if (label) {
    return (
      <label
        className={cn(
          classes.labelContainer,
          disabled && classes.disabled,
          className,
        )}
        onClick={onClick}
      >
        {checkbox}
        <div className={classes.label}>{label}</div>
      </label>
    );
  }

  return checkbox;
};

export default Checkbox;
