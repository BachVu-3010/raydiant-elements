import React from 'react';
import PropTypes from 'prop-types';
import MUITextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Icon from './Icon';

const propTypes = {
  /** Autocomplete hint */
  autoComplete: PropTypes.string,
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
  /** ID */
  id: PropTypes.string,
  /** Icon associated with the input. */
  icon: PropTypes.string,
  /** Get a reference to the underlying input field. */
  inputRef: PropTypes.func,
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
  autoComplete: null,
  className: '',
  disabled: false,
  error: false,
  helperText: '',
  icon: null,
  id: null,
  inputRef: null,
  multiline: false,
  name: '',
  placeholder: '',
  type: 'text',
  value: '',
  onBlur: null,
  onChange: null,
  onClick: null,
  onFocus: null,
};

const isAllowedSelectionType = type => {
  const allowedSelectionTypes = ['text', 'search', 'password', 'tel', 'url'];
  return allowedSelectionTypes.indexOf(type) >= 0;
};

/**
 * Text field
 */
class TextField extends React.Component {
  componentDidUpdate() {
    if (this.userInputValue === undefined) {
      // If we have no user input value defined, the user wasn't interacting with
      // this field. We can bail.
      return;
    }
    // If we can set selection AND the value was modified in onChange, we can
    // do some cursor magic to prevent it from moving to the end of the input.
    if (
      isAllowedSelectionType(this.props.type) &&
      this.input.value !== this.userInputValue
    ) {
      const cursorIdx =
        this.cursorIdx + (this.input.value.length - this.userInputValue.length);
      this.input.selectionStart = cursorIdx;
      this.input.selectionEnd = cursorIdx;
    }
    // Clean up the old value
    delete this.userInputValue;
  }
  onChange = evt => {
    const { type, onChange } = this.props;
    // Make note of the current cursor location in case we need to fix it later
    // (see componentDidUpdate)
    if (isAllowedSelectionType(type)) {
      this.userInputValue = evt.target.value;
      this.cursorIdx = this.input.selectionStart;
    }
    if (onChange) {
      onChange(evt);
    }
  };
  render() {
    const {
      classes,
      className,
      error,
      multiline,
      onChange,
      icon,
      ...inputProps
    } = this.props;

    let multilineOpts = {};
    if (multiline) {
      multilineOpts = { rows: 4, rowsMax: 4, multiline: true };
    }

    const textField = (
      <MUITextField
        fullWidth
        {...multilineOpts}
        {...inputProps}
        className={classnames(className, {
          [classes.alert]: error === 'alert',
        })}
        InputClassName={classnames(icon && classes.inputPaddingRight)}
        error={error}
        inputRef={node => {
          this.input = node;
          if (this.props.inputRef) {
            this.props.inputRef(node);
          }
        }}
        ref={node => {
          this.root = node;
        }}
        onChange={this.onChange}
        InputProps={{
          onMouseDown: evt => {
            // Hack to allow clicks on TextArea "header" piece to focus the
            // actual TextArea.
            if (evt.target !== this.input) {
              evt.preventDefault();
              this.input.focus();
            }
          },
        }}
      />
    );

    return icon ? (
      <div className={classes.container}>
        {textField}
        <Icon className={classes.icon} icon={icon} />
      </div>
    ) : (
      textField
    );
  }
}

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export const styles = theme => ({
  container: {
    position: 'relative',
    display: 'block',
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 10,
    fill: theme.palette.input.labelText,
  },
  inputPaddingRight: {
    paddingRight: 30,
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
});

export default withStyles(styles)(TextField);
