import CheckIcon from '@material-ui/icons/Check';
import MUIPaper from '@material-ui/core/Paper';
import cn from 'classnames';
import * as React from 'react';
import { testAttr } from '../../helpers';
import useStyles from './Checkbox.styles';

interface CheckboxProps {
  checked: boolean;
  label?: string;
  round?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  onClick?: (e: React.MouseEvent<any>) => void;
  className?: string;
  testId?: string;
}

export const Checkbox: React.SFC<CheckboxProps> = ({
  className,
  checked,
  label,
  // TODO:
  // round,
  disabled,
  onClick,
  onChange,
  testId,
}) => {
  const classes = useStyles();

  const checkbox = (
    <MUIPaper
      className={cn(
        classes.inputContainer,
        disabled && classes.disabled,
        className,
      )}
      elevation={checked ? 1 : 0}
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
        onClick={!label && onClick}
        {...testAttr(testId)}
      />
      <div className={cn(classes.checkbox, checked && classes.checked)}>
        {checked && <CheckIcon className={classes.icon} />}
      </div>
    </MUIPaper>
  );

  if (label) {
    return (
      <label
        className={cn(classes.labelContainer, disabled && classes.disabled)}
        onClick={onClick}
      >
        {checkbox}
        <span className={classes.label}>{label}</span>
      </label>
    );
  }

  return checkbox;
};

export default Checkbox;
