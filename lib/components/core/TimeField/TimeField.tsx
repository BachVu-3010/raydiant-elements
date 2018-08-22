import * as React from 'react';
import TextField from '../TextField';

interface TimeFieldProps {
  /** The label of the field */
  label: string;
  /** The value of the field */
  value?: string;
  /** Set to true to display input with error */
  error?: boolean;
  /** Set to true to disable the input */
  disabled?: boolean;
  /** Optional helper text */
  helperText?: React.ReactNode;
  /** Called when the value changes */
  onChange?: (value: string) => any;
}

class TimeField extends React.Component<TimeFieldProps> {
  render() {
    const { label, value, error, disabled, helperText, onChange } = this.props;
    return (
      <TextField
        label={label}
        value={value}
        error={error}
        disabled={disabled}
        helperText={helperText}
        onChange={onChange}
        mask={[/\d/, /\d/, ':', /\d/, /\d/, ' ', /(a|p)/, 'm']}
        maskPlaceholderChar="_"
        maskGuide
        keepCharPositions
      />
    );
  }
}

export default TimeField;
