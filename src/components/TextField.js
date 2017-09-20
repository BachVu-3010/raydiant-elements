import React from 'react';
import PropTypes from 'prop-types';
import MUITextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
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
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
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

const isAllowedSelectionType = type => {
  const allowedSelectionTypes = ['text', 'search', 'password', 'tel', 'url'];
  return allowedSelectionTypes.indexOf(type) >= 0;
};

/**
 * Text field
 */
class TextField extends React.Component {
  componentWillUpdate() {
    if (isAllowedSelectionType(this.props.type)) {
      // Note the current cursor and input length.
      // Transforming the text in onChange will lose the cursor position.
      this.cursorIdx = this.input.selectionStart;
      this.cursorLength = this.input.value.length;
    }
  }
  componentDidUpdate() {
    if (isAllowedSelectionType(this.props.type)) {
      // Reset the cursor after the data's been updated.
      const cursorIdx =
        this.cursorIdx + (this.input.value.length - this.cursorLength);
      this.input.selectionStart = cursorIdx;
      this.input.selectionEnd = cursorIdx;
    }
  }
  inputRef = node => {
    this.input = node;
  };
  render() {
    const {
      classes,
      className,
      disabled,
      error,
      helperText,
      label,
      multiline,
      name,
      placeholder,
      type,
      value,
      onBlur,
      onChange,
      onFocus,
    } = this.props;
    let multilineOpts = {};
    if (multiline) {
      multilineOpts = { rows: 4, rowsMax: 4, multiline: true };
    }
    return (
      <MUITextField
        fullWidth
        {...multilineOpts}
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
          type,
          value,
          onBlur,
          onChange,
          onFocus,
        }}
        inputRef={this.inputRef}
      />
    );
  }
}

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

const styles = {
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
};

export default withStyles(styles)(TextField);
