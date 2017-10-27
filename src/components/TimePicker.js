import React from 'react';
import PropTypes from 'prop-types';
import TextField from './TextField';
import { formatTime, parseTime, toISOFragment, fromISOFragment } from './time';

export const propTypes = {
  /** A moment formatting string */
  format: PropTypes.string,
  /**  @ignore */
  onBlur: PropTypes.func,
  /** Function that's called when the value changes and the control's blurred */
  onTimeChange: PropTypes.func.isRequired,
  /** a time string in format hh:mm (24-hour time) */
  value: PropTypes.string.isRequired,
};
export const defaultProps = {
  onBlur: null,
  format: 'h:mm a',
};

/*
RO: commenting this out for the time being.
see https://app.asana.com/0/393022371001736/464241822313680

// Time dropdown works in 30 minute chunks.
const DROPDOWN_INTERVAL_MINUTES = 30;

// A cache for our time options, so we don't need to generate
// them every time.
const times = {};
const getTimes = format => {
  if (!times[format]) {
    const timesList = [];
    let totalMinutes = 0;
    while (totalMinutes < 24 * 60) {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      timesList.push({
        value: {
          hours,
          minutes,
        },
        label: formatTime(hours, minutes, format),
      });
      totalMinutes += DROPDOWN_INTERVAL_MINUTES;
    }
    times[format] = timesList;
  }
  return times[format];
}; */

const propsToState = props => {
  const fragment = props.value;
  const { hours, minutes } = fromISOFragment(fragment);
  return {
    time: formatTime(hours, minutes, props.format),
  };
};

/**
 * A control that allows a user to pick a time. Usually used in conjunction with
 * a [DatePicker](#datepicker). See [TextField](#textfield) for relevant props
 * (e.g., `label`, `helperText`).
 * 
 * `onTimeChange` behaves a bit differently for this control than a typical
 * [TextField](#textfield) `onChange`.
 * 
 * It will trigger only on a `blur` event, and will trigger only if the value in
 * the field is a string the control can parse. Otherwise, the control reverts
 * its state to the input value and will not trigger `onTimeChange`. The value
 * you receive from `onTimeChange` will always be a valid time fragment. `onChange`
 * will return whatever the user is typing, whether valid or not.
 */
class TimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = propsToState(props);
  }

  componentWillReceiveProps(props) {
    if (this.props.value !== props.value) {
      this.setState(propsToState(props));
    }
  }
  onBlur = evt => {
    this.checkValue();
    if (this.props.onBlur) {
      this.props.onBlur(evt);
    }
  };
  checkValue = () => {
    const { time } = this.state;
    const { value, onTimeChange } = this.props;
    const parsedTime = parseTime(time);
    if (parsedTime) {
      const fragment = toISOFragment(parsedTime.hours, parsedTime.minutes);
      if (fragment !== value) {
        onTimeChange(fragment);
        return;
      }
    }
    // If the value is bad, or in the incorrect format, reset it.
    this.setState(propsToState(this.props));
  };
  render() {
    const { time } = this.state;
    const { onTimeChange, ...otherProps } = this.props;
    return (
      <TextField
        {...otherProps}
        onBlur={this.onBlur}
        value={time}
        onChange={evt => this.setState({ time: evt.target.value })}
      />
    );
  }
}
TimePicker.propTypes = propTypes;
TimePicker.defaultProps = defaultProps;

export default TimePicker;
