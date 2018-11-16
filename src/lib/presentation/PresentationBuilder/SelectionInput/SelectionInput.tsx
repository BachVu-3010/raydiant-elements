import * as React from 'react';
import SelectField from '../../../core/SelectField';
import * as T from '../../PresentationTypes';

interface SelectionInputProps {
  label: string;
  value: string;
  options: T.SelectionOption[];
  helperText: React.ReactNode;
  error?: boolean;
  onChange: (value: string) => any;
  onBlur: React.FocusEventHandler<any>;
  // TODO: Don't like that we need to pass in the strings object. Strings likely isn't
  // the correct way to i18n and we should remove it in the future.
  strings: T.Strings;
}

const SelectionInput: React.SFC<SelectionInputProps> = ({
  label,
  value,
  options,
  helperText,
  error,
  onChange,
  onBlur,
  strings,
}) => (
  <SelectField
    label={label}
    value={value || (options[0] ? options[0].value : '')}
    onChange={onChange}
    onBlur={onBlur}
    helperText={helperText}
    error={error}
  >
    {options.map(opt => (
      <option key={opt.value} value={opt.value}>
        {strings[opt.name] || opt.name}
      </option>
    ))}
  </SelectField>
);

export default SelectionInput;
