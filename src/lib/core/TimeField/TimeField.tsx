import * as React from 'react';
import TextField from '../../core/TextField';

interface TimeFieldProps {
  testId?: string;
  label?: string;
  error?: boolean;
  value?: string;
  onChange?: (val: string) => any;
  onBlur?: React.FocusEventHandler<any>;
  disabled?: boolean;
  helperText?: React.ReactNode;
}

export const TimeField: React.SFC<TimeFieldProps> = ({
  value = '',
  error = false,
  onChange = () => {
    return;
  },
  onBlur = () => {
    return;
  },
  label = '',
  disabled = false,
  helperText = '',
  testId,
}) => (
  <TextField
    type="time"
    label={label}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    disabled={disabled}
    helperText={helperText}
    error={error}
    testId={testId}
  />

  // <FormControl fullWidth={fullWidth} error={error}>
  //     <InputLabel error={error} disabled={disabled}>
  //       {label}
  //     </InputLabel>
  //     <Input
  //       fullWidth
  //       type="time"
  //       value={value}
  //       onChange={e => onChange(e.target.value)}
  //       onBlur={onBlur}
  //       inputProps={{
  //         ...testAttr(testId),
  //       }}
  //       disabled={disabled}
  //     />
  //   {helperText && <FormHelperText>{helperText}</FormHelperText>}
  // </FormControl>
);

export default TimeField;
