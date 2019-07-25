import * as React from 'react';
import SelectField from '../../../core/SelectField';
import * as P from '../../PresentationTypes';

interface PlaylistInputProps {
  label: string;
  value: string;
  playlists: P.Playlist[];
  helperText: React.ReactNode;
  error?: boolean;
  onChange: (value: string) => any;
  onBlur: React.FocusEventHandler<any>;
}

const PlaylistInput: React.SFC<PlaylistInputProps> = ({
  label,
  value,
  playlists,
  helperText,
  error,
  onChange,
  onBlur,
}) => {
  const options = playlists.map(playlist => ({
    value: playlist.id,
    name: playlist.name,
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

export default PlaylistInput;
