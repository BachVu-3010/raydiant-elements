import React from 'react';
import PropTypes from 'prop-types';
import MUITextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';

import { styles } from './TextField';

const propTypes = {
  /** Class name(s) */
  className: PropTypes.string,
  /** Whether the input is disabled or not. */
  disabled: PropTypes.bool,
  /** Input should be in an error state.
   * Pass `true` or `'error'` for an error state.
   * Pass `'alert'` for an alert state.
   */
  error: PropTypes.oneOf(['alert', 'error', true, false]),
  /** Additional information to help the user fill the field. */
  helperText: PropTypes.node,
  /** The description for the input field. */
  label: PropTypes.string.isRequired,
  /** Name */
  name: PropTypes.string,
  /** Ghosted text to display if the input field is empty. */
  placeholder: PropTypes.string,
  /** The value of the input field. */
  value: PropTypes.number,
  /** The value of the input field. */
  min: PropTypes.number,
  /** The value of the input field. */
  max: PropTypes.number,
  /** Sets focus to the input when true */
  autoFocus: PropTypes.bool,
  /** Called when the user blurs the text field. */
  onBlur: PropTypes.func,
  /** Called when the user modifies the text. */
  onChange: PropTypes.func,
  /** Called when the user focuses the text field. */
  onFocus: PropTypes.func,
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
const defaultProps = {
  className: '',
  disabled: false,
  error: false,
  helperText: '',
  name: '',
  placeholder: '',
  value: 0,
  min: undefined,
  max: undefined,
  autoFocus: false,
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
};

/**
 * Number field
 */
class NumberField extends React.Component {
  componentWillReceiveProps(nextProps) {
    const { min, max } = this.props;

    if (min !== nextProps.min) {
      this.input.setAttribute('min', nextProps.min);
    }

    if (max !== nextProps.max) {
      this.input.setAttribute('max', nextProps.max);
    }
  }
  inputRef = node => {
    const { min, max } = this.props;

    this.input = node;

    if (node) {
      this.input.setAttribute('min', min);
      this.input.setAttribute('max', max);
    }
  };
  render() {
    const {
      classes,
      className,
      disabled,
      error,
      helperText,
      label,
      name,
      placeholder,
      value,
      min,
      max,
      autoFocus,
      onChange,
      onBlur,
      onFocus,
    } = this.props;

    return (
      <MUITextField
        type="number"
        fullWidth
        autoFocus={autoFocus}
        className={classnames(className, classes.root, {
          [classes.alert]: error === 'alert',
        })}
        {...{
          disabled,
          error,
          helperText,
          label,
          name,
          placeholder,
          value,
          min,
          max,
          onBlur,
          onChange,
          onFocus,
        }}
        inputRef={this.inputRef}
      />
    );
  }
}

NumberField.propTypes = propTypes;
NumberField.defaultProps = defaultProps;

export default withStyles(styles)(NumberField);
