import * as cn from 'classnames';
import * as React from 'react';
import Icon from '../Icon';
import TextField from '../TextField';
import withStyles, { WithStyles } from '../withStyles';
import styles from './FileField.styles';

interface FileFieldProps extends WithStyles<typeof styles> {
  /** The label of the text field */
  label: string;
  /** The label of the text field */
  value?: FileList;
  /** File types to allow */
  accept?: string[];
  /** Set to true to allow multiple files to be selected */
  multiple?: boolean;
  /** Set to true to display input with error */
  error?: boolean;
  /** Set to true to disable in the input */
  disabled?: boolean;
  /** Optional helper text */
  helperText?: React.ReactNode;
  /** Called when the value changes */
  onChange?: (value: FileList) => any;
  /** Called when the user clears the file. If provided, an 'x' will be displayed. */
  onClear?: () => any;
  /** Called when the input loses focus */
  onBlur?: React.FocusEventHandler<any>;
}

const getFileNames = (value: FileList) => {
  return Array.from(value || [])
    .map(f => f.name)
    .join(', ');
};

export const FileField: React.SFC<FileFieldProps> = ({
  label,
  value,
  accept = ['*'],
  multiple = false,
  disabled = false,
  error = false,
  helperText = '',
  onChange = () => {
    return;
  },
  onClear,
  onBlur,
  classes,
}) => {
  const shouldShowClear = !!value && !!onClear;
  const fileInput = React.createRef<HTMLInputElement>();

  return (
    <div className={classes.root}>
      <TextField
        label={label}
        value={getFileNames(value)}
        error={error}
        helperText={helperText}
        disabled={disabled}
        icon={
          shouldShowClear && (
            <button className={classes.clear} onClick={() => onClear()}>
              <Icon icon="remove" />
            </button>
          )
        }
        onFocus={() => fileInput.current.focus()}
      />
      <input
        ref={fileInput}
        disabled={disabled}
        className={cn(classes.input, value && classes.inputHasValue)}
        type="file"
        accept={accept.join(',')}
        multiple={multiple}
        onChange={e => onChange(e.target.files)}
        onBlur={onBlur}
      />
    </div>
  );
};

export default withStyles(styles)(FileField);
