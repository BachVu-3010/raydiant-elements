import React from 'react';
import PropTypes from 'prop-types';
import MUITextField from 'material-ui/TextField';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import classnames from 'classnames';

const propTypes = {
  /** Class name(s) */
  className: PropTypes.string,
  /** Whether the button is disabled or not. */
  disabled: PropTypes.bool,
  /** Input should be in an error state.  
   * Pass `true` or `'error'` for an error state.  
   * Pass `'alert'` for an alert state.
  */
  error: PropTypes.oneOf(['alert', 'error', true, false]),
  /** Additional information to help the user fill the field. */
  helperText: PropTypes.string,
  /** Icon associated with the input. */
  // icon: PropTypes.node,
  /** The description for the input field. */
  label: PropTypes.string.isRequired,
  /** Has multiple lines */
  multiline: PropTypes.bool,
  /** Name */
  name: PropTypes.string,
  /** A valid HTML5 input type. */
  type: PropTypes.string,
  /** Ghosted text to display if the input field is empty. */
  placeholder: PropTypes.string,
  /** The value of the input field. */
  value: PropTypes.string,
  /** Called when the user blurs the text field. */
  onBlur: PropTypes.func,
  /** Called when the user modifies the text. */
  onChange: PropTypes.func,
  /** Called when the user focuses the text field. */
  onFocus: PropTypes.func,
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired,
};
const defaultProps = {
  className: '',
  disabled: false,
  error: false,
  helperText: '',
  // icon: null,
  multiline: false,
  name: '',
  placeholder: '',
  type: 'text',
  value: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
};

/**
 * Text field
 */
const TextField = ({
  classes,
  className, disabled, error, helperText, label, multiline, name, placeholder, type, value,
  onBlur, onChange, onFocus }) => {
  let multilineOpts = {};
  if (multiline) {
    multilineOpts = { rows: 4, rowsMax: 4, multiline: true };
  }
  return <MUITextField
    fullWidth
    {...multilineOpts}
    className={classnames(className, classes.root, { [classes.alert]: error === 'alert' })}
    {...{
      disabled,
      error,
      helperText,
      label,
      name,
      placeholder,
      type,
      value,
      onBlur,
      onChange,
      onFocus,
    }}
  />;
};

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

const styleSheet = createStyleSheet(() => ({
  root: {
    '& label': {
      left: '10px',
    },
  },
  alert: {
    '& label': {
      color: '#f8b91c',
    },
    '& > div:after': {
      backgroundColor: '#f8b91c',
      transform: 'scaleX(1)', // alert is always underlined in yellow
    },
  },
}));

export default withStyles(styleSheet)(TextField);
