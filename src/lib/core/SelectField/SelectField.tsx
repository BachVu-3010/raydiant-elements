import * as React from 'react';
import InputHelperText from '../InputHelperText';
import InputLabel from '../InputLabel';
import Select from '../Select';
import SelectFieldItem from './SelectFieldItem';
import useStyles from './SelectField.styles';

interface SelectFieldProps {
  /** The label of the text field */
  label?: string;
  /** The label of the text field */
  value?: string;
  /** Set to true to display input with error */
  error?: boolean;
  /** Set to true to disable in the input */
  disabled?: boolean;
  /** Optional helper text */
  helperText?: React.ReactNode;
  /** Called when the value changes */
  onChange?: (value: string) => any;
  /** Called when the input loses focus */
  onBlur?: React.FocusEventHandler<any>;
  /** The <option>s of the select */
  children: React.ReactNode;
  testId?: string;
  native?: boolean;
  maxWidth?: string | number;
}

export const SelectField: React.FunctionComponent<SelectFieldProps> = ({
  label,
  value = '',
  error = false,
  disabled = false,
  helperText = '',
  onChange = () => {
    return;
  },
  onBlur = () => {
    return;
  },
  children,
  testId,
  native = true,
  maxWidth,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ maxWidth }}>
      <InputLabel error={error} disabled={disabled}>
        {label}
      </InputLabel>

      <Select
        fullWidth
        value={value}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        testId={testId}
        native={native}
      >
        {children}
      </Select>

      {helperText && (
        <InputHelperText indent error={error} disabled={disabled}>
          {helperText}
        </InputHelperText>
      )}
    </div>
  );
};

export default Object.assign(SelectField, {
  Item: SelectFieldItem,
});
