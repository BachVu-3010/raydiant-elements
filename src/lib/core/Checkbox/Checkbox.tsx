import CheckIcon from '@material-ui/icons/Check';
import MUIPaper from '@material-ui/core/Paper';
import cn from 'classnames';
import * as React from 'react';
import { testAttr } from '../../helpers';
import useStyles from './Checkbox.styles';

interface CheckboxProps {
  checked: boolean;
  label?: React.ReactNode;
  round?: boolean;
  disabled?: boolean;
  small?: boolean;
  onChange?: (checked: boolean) => void;
  onClick?: (e: React.MouseEvent<any>) => void;
  className?: string;
  testId?: string;
}

export const Checkbox: React.SFC<CheckboxProps> = ({
  className,
  checked,
  label,
  round,
  disabled,
  small,
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
        round && classes.round,
        small && classes.small,
        className,
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
        <div className={classes.label}>{label}</div>
      </label>
    );
  }

  return checkbox;
};

export default Checkbox;
