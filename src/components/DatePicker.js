/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ReactDatePicker from 'react-datepicker/lib/datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './hacks/react-datepicker-overrides.css';
import TextField, { propTypes as tfPropTypes } from './TextField';
import { HelperText } from './Typography';

export const propTypes = {
  ...tfPropTypes,
  /** Formatting string for the date; determines what we show in the input field */
  dateFormat: PropTypes.string,
  /** The maximum allowable date */
  maxDate: PropTypes.instanceOf(Date),
  /** The minimum allowable date */
  minDate: PropTypes.instanceOf(Date),
  /** Function that's called when the value changes to a valid date */
  onDateChange: PropTypes.func.isRequired,
  /** Where the popup should go. By default, will appear below
   * and aligned with the left */
  popupPlacement: PropTypes.string,
  /** a date string in format YYYY-MM-DD. Passing a falsy value means "today" */
  value: PropTypes.string,
  /** Additional information to help the user fill the field. */
  helperText: PropTypes.node,
};
export const defaultProps = {
  dateFormat: 'L',
  maxDate: null,
  minDate: null,
  popupPlacement: 'bottom-start',
  value: null,
  helperText: '',
};

class FocusableTextField extends React.Component {
  focus = () => this.input.focus();
  render() {
    return (
      <TextField
        {...this.props}
        inputRef={input => {
          this.input = input;
        }}
      />
    );
  }
}

const propsToState = props => {
  const date = props.value ? moment(props.value, 'YYYY-MM-DD') : moment();
  return {
    date,
    text: date.format(props.dateFormat),
  };
};

/**
 * A control to choose a date.
 * See [TextField](#textfield) for relevant props (e.g., `label`, `onChange`).
 */
class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = propsToState(props);
  }
  componentWillReceiveProps(props) {
    if (this.props.value !== props.value) {
      this.setState(propsToState(props));
    }
  }
  onChange = date => {
    const { value, onDateChange } = this.props;
    this.setState({ date, text: this.formatDate(date) });
    const newDateStr = date.format('YYYY-MM-DD');
    if (value !== newDateStr) {
      onDateChange(newDateStr);
    }
  };
  onChangeRaw = e => {
    this.setState({ text: e.target.value });
  };
  formatDate = date => {
    const { dateFormat } = this.props;
    return date.format(dateFormat);
  };
  // Reset the text input to a string representation of the date.
  // Useful if the user types in something we can't parse.
  resetInput = () => {
    const { date } = this.state;
    this.setState({ text: this.formatDate(date) });
  };
  render() {
    const { date, text } = this.state;
    const {
      dateFormat,
      error,
      helperText,
      label,
      maxDate,
      minDate,
      placeholder,
      popupPlacement,
      value: _value, // Ignore the inbound value, use state's `text`
      ...inputProps
    } = this.props;
    return (
      <div>
        <ReactDatePicker
          popperPlacement={popupPlacement}
          showMonthDropdown
          showYearDropdown
          dropdownMode="scroll"
          dateFormat={dateFormat}
          dateFormatCalendar=" "
          minDate={moment(minDate)}
          maxDate={moment(maxDate)}
          placeholderText={placeholder}
          selected={date}
          onChange={this.onChange}
          onChangeRaw={this.onChangeRaw}
          onBlur={this.resetInput}
          {...inputProps}
          value={text}
          customInput={
            <FocusableTextField
              {...{ label, error }}
              inputRef={input => {
                this.input = input;
              }}
            />
          }
        />
        {helperText && <HelperText>{helperText}</HelperText>}
      </div>
    );
  }
}
DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
