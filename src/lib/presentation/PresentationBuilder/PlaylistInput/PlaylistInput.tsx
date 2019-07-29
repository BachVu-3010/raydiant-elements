import * as React from 'react';
import SelectField from '../../../core/SelectField';
import * as P from '../../PresentationTypes';

interface PlaylistInputProps {
  label: string;
  value: string;
  propertyTypeIndex: number;
  playlists: P.Playlist[];
  helperText: React.ReactNode;
  error?: boolean;
  onChange: (value: string) => any;
  onBlur: React.FocusEventHandler<any>;
}

class PlaylistInput extends React.Component<PlaylistInputProps> {
  onChangeTimeout: number;

  componentDidMount() {
    this.checkDefaultValue();
  }

  componentDidUpdate(prevProps: PlaylistInputProps) {
    const { playlists } = this.props;

    const didPlaylistsChange =
      playlists.length !== prevProps.playlists.length ||
      playlists.some((sz, i) => sz.id !== prevProps.playlists[i].id);

    if (didPlaylistsChange) {
      this.checkDefaultValue();
    }
  }

  checkDefaultValue() {
    const { value, propertyTypeIndex, playlists, onChange } = this.props;
    // Set default playlist if one doesn't exist. Uses propertyTypeIndex to pick
    // another playlist when there are multiple zones.
    if (!value && playlists.length > 0) {
      this.onChangeTimeout = setTimeout(() => {
        onChange(playlists[Math.min(propertyTypeIndex, playlists.length)].id);
      });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.onChangeTimeout);
  }

  render() {
    const {
      label,
      value,
      playlists,
      helperText,
      error,
      onChange,
      onBlur,
    } = this.props;

    const options = playlists.map(pl => ({
      value: pl.id,
      name: pl.name,
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
        {options.length === 0 && <option disabled>No playlists found</option>}
      </SelectField>
    );
  }
}

export default PlaylistInput;
