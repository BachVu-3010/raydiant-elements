import React from 'react';
import PropTypes from 'prop-types';
import MUITextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';

import { styles as textFieldStyles } from './TextField';

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
  helperText: PropTypes.string,
  /** The description for the input field. */
  label: PropTypes.string.isRequired,
  /** Name */
  name: PropTypes.string,
  /** Ghosted text to display if the input field is empty. */
  placeholder: PropTypes.string,
  /** The value of the input field.
   * Pass a FileList object to display names of the selected files
   */
  value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
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
  multiple: false,
  accept: '',
  disabled: false,
  error: false,
  helperText: '',
  name: '',
  placeholder: '',
  value: '',
  onBlur: () => {},
  onChange: () => {},
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
};

FileField.propTypes = propTypes;
FileField.defaultProps = defaultProps;

export default withStyles(styles)(FileField);
