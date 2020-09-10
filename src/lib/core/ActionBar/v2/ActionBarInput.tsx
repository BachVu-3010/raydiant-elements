import * as cn from 'classnames';
import * as React from 'react';
import useStyles from './ActionBarInput.styles';

export interface ActionBarInputProps {
  icon?: React.ReactNode;
  label?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  maxWidth?: string | number;
  autoFocus?: boolean;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (value: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const ActionBarInput: React.FunctionComponent<ActionBarInputProps> = ({
  icon,
  label,
  value,
  type,
  disabled,
  maxWidth,
  autoFocus,
  onClick,
  onChange,
  onBlur,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ maxWidth }}>
      <input
        className={cn(classes.input, icon && classes.inputWithIcon)}
        placeholder={label}
        value={value}
        type={type}
        disabled={disabled}
        onClick={onClick}
        onChange={event => {
          if (onChange) {
            onChange(event.target.value);
          }
        }}
        onBlur={onBlur}
        autoFocus={autoFocus}
      />
      {icon && <div className={classes.icon}>{icon}</div>}
    </div>
  );
};

export default ActionBarInput;
