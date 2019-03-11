import * as React from 'react';
import SelectField from '../../../core/SelectField';
import * as P from '../../PresentationTypes';

interface ThemeInputProps {
  label: string;
  value: string;
  themes: P.Theme[];
  helperText: React.ReactNode;
  error?: boolean;
  onChange: (value: string) => any;
  onBlur: React.FocusEventHandler<any>;
}

const ThemeInput: React.SFC<ThemeInputProps> = ({
  label,
  value,
  themes,
  helperText,
  error,
  onChange,
  onBlur,
}) => {
  const options = themes.map(theme => ({
    value: theme.id,
    name: theme.name,
  }));

  return (
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
          {opt.name}
        </option>
      ))}
    </SelectField>
  );
};

export default ThemeInput;
