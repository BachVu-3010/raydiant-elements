import React from 'react';
import PropTypes from 'prop-types';
import MUITextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';

import { styles as textFieldStyles } from './TextField';
import Icon from './Icon';

const propTypes = {
  /** Class name(s) */
  className: PropTypes.string,
  /** Allow multiple files to be selected */
  multiple: PropTypes.bool,
  /** File types to allow */
  accept: PropTypes.string,
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
  /** Whether the field is optional or not. */
  optional: PropTypes.bool,
  /** Ghosted text to display if the input field is empty. */
  placeholder: PropTypes.string,
  /** The value of the input field.
   * Pass a FileList object to display names of the selected files
   */
  value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  /** Called when the user blurs the text field. */
  onBlur: PropTypes.func,
  /** Called when the user clears the file. Will only be called for `optional` file fields. */
  onClear: PropTypes.func,
  /** Called when the user selects a file.
   *
   * This will be called with an empty file list if the user cancels out of the selection dialog.
   */
  onChange: PropTypes.func,
  /** Called when the user focuses the text field. */
  onFocus: PropTypes.func,
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
const defaultProps = {
  className: '',
  multiple: false,
  accept: '',
  disabled: false,
  error: false,
  helperText: '',
  name: '',
  optional: false,
  placeholder: '',
  value: '',
  onBlur: () => {},
  onChange: () => {},
  onClear: () => {},
  onFocus: () => {},
};

const getFileNames = fileList => {
  const fileArr = [...(fileList || [])];
  return fileArr.map(f => f.name).join(', ');
};

/** File field */
class FileField extends React.Component {
  inputRef = node => {
    if (node) {
      node.setAttribute('tabIndex', -1);
    }
  };
  handleClear = event => {
    const { onClear } = this.props;
    if (onClear) {
      onClear(event);
    }
  };
  render() {
    const {
      classes,
      multiple,
      accept,
      className,
      disabled,
      error,
      helperText,
      label,
      name,
      optional,
      placeholder,
      value,
      onChange,
      onBlur,
      onFocus,
    } = this.props;

    return (
      <div className={classes.wrapper}>
        <MUITextField
          inputRef={this.inputRef}
          fullWidth
          className={classnames(className, classes.root, {
            [classes.alert]: error === 'alert',
          })}
          {...{
            disabled,
            error,
            helperText,
            label,
            placeholder,
            value: getFileNames(value),
          }}
        />
        {!disabled && (
          <input
            type="file"
            ref={input => {
              if (this.input) {
                this.input.removeEventListener('clear', this.handleClear);
              }
              this.input = input;
              if (input) {
                this.input.addEventListener('clear', this.handleClear);
              }
            }}
            className={classes.fileInput}
            {...{
              name,
              multiple,
              accept,
              onBlur,
              onFocus,
              onChange,
            }}
          />
        )}
        {!disabled &&
          optional &&
          value &&
          value.length && (
            <button
              className={classes.clearButton}
              onClick={() => {
                const event = new Event('clear');
                this.input.dispatchEvent(event);
              }}
            >
              <Icon icon="remove" />
            </button>
          )}
      </div>
    );
  }
}

const styles = {
  ...textFieldStyles,
  wrapper: {
    position: 'relative',
  },
  fileInput: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    cursor: 'pointer',
  },
  clearButton: {
    position: 'absolute',
    right: 0,
    top: 5,
    border: 'none',
    background: 'transparent',
    margin: 0,
    padding: 5,
    zIndex: 1,
    WebkitAppearance: 'none',
  },
};

FileField.propTypes = propTypes;
FileField.defaultProps = defaultProps;

export default withStyles(styles)(FileField);
