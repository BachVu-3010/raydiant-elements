import FormControl from '@material-ui/core/FormControl';
import * as React from 'react';
import FormHelperText from '../../internal/FormHelperText';
import InputBackground from '../../internal/InputBackground';
import InputLabel from '../../internal/InputLabel';
import Select from '../../internal/Select';
import SelectFieldItem from './SelectFieldItem';

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
  shrink?: boolean;
  testId?: string;
  native?: boolean;
}

export const SelectField: React.SFC<SelectFieldProps> = ({
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
  shrink,
  testId,
  native = true,
}) => (
  <FormControl fullWidth error={error}>
    <InputBackground>
      {label && (
        <InputLabel error={error} disabled={disabled} shrink={shrink}>
          {label}
        </InputLabel>
      )}
      <Select
        fullWidth
        value={value}
        disabled={disabled}
        onChange={e => onChange(e.target.value)}
        onBlur={onBlur}
        testId={testId}
        native={native}
      >
        {children}
      </Select>
    </InputBackground>
    {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </FormControl>
);

export default Object.assign(SelectField, {
  Item: SelectFieldItem,
});
