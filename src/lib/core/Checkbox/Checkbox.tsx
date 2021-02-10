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
  small?: boolean;
  onChange?: (checked: boolean) => void;
  onClick?: (e: React.MouseEvent<any>) => void;
  className?: string;
  testId?: string;
}

export const Checkbox: React.SFC<CheckboxProps> = ({
  className,
  checked,
  indeterminate= false,
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
        !label && className,
        classes.inputContainer,
        disabled && classes.disabled,
        round && classes.round,
        small && classes.small,
        indeterminate && classes.indeterminate,
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
        onClick={!label ? onClick : undefined}
        {...testAttr(testId)}
      />
      <div className={cn(
        classes.checkbox,
        (checked || indeterminate) && classes.checked,
        indeterminate && classes.indeterminate,
      )}>
        {(checked || indeterminate) && <CheckboxIcon indeterminate={indeterminate} round={round} />}
      </div>
    </MUIPaper>
  );

  if (label) {
    return (
      <label
        className={cn(classes.labelContainer, disabled && classes.disabled, className)}
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
