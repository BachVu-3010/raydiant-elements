import * as React from 'react';
import SelectField from '../../../core/SelectField';
import * as P from '../../PresentationTypes';

interface ThemeInputProps {
  label: string;
  value: string;
  themes: P.Theme[];
  helperText: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  onChange: (value: string) => any;
  onBlur: React.FocusEventHandler<any>;
}

const ThemeInput: React.SFC<ThemeInputProps> = ({
  label,
  value,
  themes,
  helperText,
  error,
  disabled,
  onChange,
  onBlur,
}) => {
  const theme = themes.find(pl => pl.id === value);
  // Assume the theme was assigned by an admin if there is a theme id but we can't
  // find it in the current user's themes. This is a workaround, ideally the API would return
  // the basic information about the assigned theme if the current user doesn't have access to it.
  const isAdminAssigned = value && !theme;

  const options = themes
    .filter(t => !t.resource.deletedAt)
    .map(t => ({
      value: t.id,
      name: t.name,
    }));

  return (
    <SelectField
      label={label}
      value={value || (options[0] ? options[0].value : '')}
      onChange={onChange}
      onBlur={onBlur}
      helperText={helperText}
      error={error}
      disabled={disabled}
    >
      {isAdminAssigned && (
        <option value={value}> Administrator assigned theme</option>
      )}
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.name}
        </option>
      ))}
    </SelectField>
  );
};

export default ThemeInput;
