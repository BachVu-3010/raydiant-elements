import * as React from 'react';
import TextField from '../../../../core/TextField';

interface TextInputProps {
  label: string;
  value: string;
  constraints: {
    maxlength?: number;
  };
  helperText: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  onChange: (value: string) => any;
  // onBlur: React.FocusEventHandler<any>;
}

const TextInput: React.SFC<TextInputProps> = ({
  label,
  value: defaultValue,
  constraints,
  helperText,
  error,
  disabled,
  onChange,
  // onBlur,
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
      multiline
      label={label}
      value={value}
      onChange={setValue}
      onBlur={handleBlur}
      helperText={helperText}
      error={error}
      disabled={disabled}
      maxLength={constraints.maxlength}
    />
  );
};

export default TextInput;
