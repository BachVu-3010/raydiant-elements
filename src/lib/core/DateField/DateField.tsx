import MomentUtils from '@date-io/moment';
import {
  DatePicker as MaterialDatePicker,
  MuiPickersUtilsProvider,
} from 'material-ui-pickers';
import * as React from 'react';
import TextField from '../TextField';

interface DateFieldProps {
  value?: string;
  onChange: (date: string) => void;
  onBlur?: React.FocusEventHandler<any>;
  label?: string;
  helperText?: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  maxDate?: string | Date;
  minDate?: string | Date;
  dateFormat?: string;
  testId?: string;
}

export class DateField extends React.Component<DateFieldProps> {
  static defaultProps = {
    dateFormat: 'L',
  };
  render() {
    const {
      value,
      onChange,
      onBlur,
      label,
      helperText,
      error,
      disabled,
      minDate,
      maxDate,
      dateFormat,
      testId,
    } = this.props;
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <MaterialDatePicker
          value={value}
          onChange={momentDate => onChange(momentDate.format(dateFormat))}
          TextFieldComponent={(textFieldComponentProps: any) => (
            <TextField
              {...textFieldComponentProps}
              label={label}
              onBlur={onBlur}
              helperText={helperText}
              error={error}
              testId={testId}
            />
          )}
          disabled={disabled}
          format="MM/DD/YYYY"
          minDate={minDate}
          maxDate={maxDate}
        />
      </MuiPickersUtilsProvider>
    );
  }
}

export default DateField;
