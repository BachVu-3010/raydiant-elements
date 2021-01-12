import * as React from 'react';
import TextField from '../../../../core/TextField';

interface StringInputProps {
  label: string;
  value: string;
  constraints: {
    maxlength?: number;
  };
  helperText: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  onChange: (value: string) => any;
}

const StringInput: React.SFC<StringInputProps> = ({
  label,
  value: defaultValue,
  constraints,
  helperText,
  error,
  disabled,
  onChange,
}) => {
  const [value, setValue] = React.useState(defaultValue);

  React.useEffect(
    () => {
      setValue(defaultValue);
    },
    [defaultValue],
  );

  const handleBlur = React.useCallback(
    () => {
      onChange(value);
    },
    [value, onChange],
  );

  return (
    <TextField
      label={label}
      value={value}
      onChange={setValue}
      onBlur={handleBlur}
      helperText={helperText}
      error={error}
      maxLength={constraints.maxlength}
      disabled={disabled}
    />
  );
};

export default StringInput;
