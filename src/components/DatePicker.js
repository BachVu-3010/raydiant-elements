/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ReactDatePicker from 'react-datepicker/lib/datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './hacks/react-datepicker-overrides.css';
import TextField, { propTypes as tfPropTypes } from './TextField';
import { Note } from './Typography';

export const propTypes = {
  ...tfPropTypes,
  /** Where the popup should go. By default, will appear above or below
   * (depending on space) and aligned with the left */
  popupPlacement: PropTypes.string,
  /** Function that's called when the value changes and the control's blurred */
  onDateChange: PropTypes.func.isRequired,
  /** a date string in format YYYY-MM-DD. Passing a falsy value means "today" */
  value: PropTypes.string,
};
export const defaultProps = {
  popupPlacement: 'bottom-start',
  value: null,
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

const propsToState = props => ({
  date: props.value ? moment(props.value, 'YYYY-MM-DD') : moment(),
});

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
    this.setState({ date });
    const newDateStr = date.format('YYYY-MM-DD');
    if (value !== newDateStr) {
      onDateChange(newDateStr);
    }
  };
  render() {
    const { date } = this.state;
    const {
      error,
      helperText,
      label,
      placeholder,
      popupPlacement,
      value,
      ...inputProps
    } = this.props;
    return (
      <div>
        <ReactDatePicker
          popperPlacement={popupPlacement}
          showMonthDropdown
          showYearDropdown
          dropdownMode="scroll"
          dateFormatCalendar=" "
          placeholderText={placeholder}
          selected={date}
          onChange={this.onChange}
          {...inputProps}
          customInput={
            <FocusableTextField
              {...{ label, error }}
              inputRef={input => {
                this.input = input;
              }}
            />
          }
        />
        <Note>{helperText}</Note>
      </div>
    );
  }
}
DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;
export default DatePicker;
