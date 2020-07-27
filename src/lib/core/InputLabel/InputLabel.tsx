import * as cn from 'classnames';
import * as React from 'react';
import useStyles from './InputLabel.styles';

interface InputLabelProps {
  disabled?: boolean;
  error?: boolean;
}

const InputLabel: React.SFC<InputLabelProps> = ({
  disabled = false,
  error = false,
  children,
}) => {
  const classes = useStyles();
  return (
    <label
      className={cn(
        classes.root,
        disabled && classes.disabled,
        error && classes.error,
      )}
    >
      {children}
    </label>
  );
};

export default InputLabel;
