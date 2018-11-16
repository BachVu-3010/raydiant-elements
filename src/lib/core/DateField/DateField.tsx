import * as moment from 'moment';
import * as React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FocusableTextField from './FocusableTextField';
import './react-datepicker-overrides.css';

interface DateFieldProps {
  /** The label of the field */
  label: string;
  /** A date string in format YYYY-MM-DD. Passing a falsy value means "today" */
  value?: string;
  /** The maximum allowable date */
  maxDate?: string | Date;
  /** The minimum allowable date */
  minDate?: string | Date;
  /** Set to true to display input with error */
  error?: boolean;
  /** Set to true to disable the input */
  disabled?: boolean;
  /** Additional information to help the user fill the field. */
  helperText?: React.ReactNode;
  /** Formatting string for the date; determines what we show in the input field */
  dateFormat: string;
  /** Function that's called when the value changes to a valid date */
  onChange?: (value: string) => any;
  /** Called when the input loses focus */
  onBlur?: React.FocusEventHandler<any>;
}

interface DateFieldState {
  date?: moment.Moment;
}

class DateField extends React.Component<DateFieldProps, DateFieldState> {
  static defaultProps = {
    dateFormat: 'L',
  };

  static getDerivedStateFromProps(props: DateFieldProps) {
    return {
      date: props.value ? moment(props.value) : undefined,
    };
  }

  state = {
    date: this.props.value ? moment(this.props.value) : undefined,
  };

  handleChange = (date: moment.Moment) => {
    const { onChange, dateFormat } = this.props;

    this.setState({ date });
    if (date.isValid()) {
      onChange(date.format(dateFormat));
    }
  };

  handleRawChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange, dateFormat } = this.props;
    const value = e.target.value;
    const date = moment(value);

    this.setState({ date: moment(value) });
    if (date.isValid()) {
      onChange(date.format(dateFormat));
    }
  };

  render() {
    const {
      label,
      error,
      disabled,
      helperText,
      minDate,
      maxDate,
      dateFormat,
      onBlur,
    } = this.props;

    const { date } = this.state;

    return (
      <DatePicker
        disabled={disabled}
        selected={date}
        onChange={this.handleChange}
        onChangeRaw={this.handleRawChange}
        onBlur={onBlur}
        minDate={minDate ? moment(minDate) : undefined}
        maxDate={maxDate ? moment(maxDate) : undefined}
        dateFormat={dateFormat}
        dateFormatCalendar=" "
        showMonthDropdown
        showYearDropdown
        dropdownMode="scroll"
        popperPlacement="bottom-start"
        customInput={
          <FocusableTextField
            value={date ? date.format(dateFormat) : undefined}
            label={label}
            error={error}
            helperText={helperText}
            disabled={disabled}
          />
        }
      />
    );
  }
}

export default DateField;
