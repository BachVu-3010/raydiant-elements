import * as React from 'react';
import Button from '../../../core/Button';
import SelectField from '../../../core/SelectField';
import Row from '../../../layout/Row';
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
  onEdit?: (value: string) => void;
  onCreate?: () => void;
}

export const NEW_PLAYLIST_VALUE = 'new';

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
        // This ensures we pick the second playlist as the default for zone2 of MZ
        // if there is more than one user playlist.
        const defaultPlaylistIndex = Math.min(
          propertyTypeIndex,
          playlists.length - 1,
        );
        onChange(playlists[defaultPlaylistIndex].id);
      });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.onChangeTimeout);
  }

  handleChange = (value: string) => {
    const { onChange, onCreate } = this.props;
    if (value === NEW_PLAYLIST_VALUE) {
      onCreate();
    } else {
      onChange(value);
    }
  };

  render() {
    const {
      label,
      value,
      playlists,
      helperText,
      error,
      onBlur,
      onEdit,
      onCreate,
    } = this.props;

    const options = playlists.map(pl => ({
      value: pl.id,
      name: pl.name,
    }));

    const valueOrDefault = value || (options[0] ? options[0].value : '');

    return (
      <Row>
        <SelectField
          label={label}
          value={valueOrDefault}
          onChange={this.handleChange}
          onBlur={onBlur}
          helperText={helperText}
          error={error}
        >
          {onCreate && (
            <>
              <option value={NEW_PLAYLIST_VALUE}>New Empty Playlist</option>
              <option value="new-separator" disabled>
                --------------------------
              </option>
            </>
          )}
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.name}
            </option>
          ))}
          {options.length === 0 && <option disabled>No playlists found</option>}
        </SelectField>
        {onEdit && (
          <Button icon="edit" onClick={() => onEdit(valueOrDefault)} />
        )}
      </Row>
    );
  }
}

export default PlaylistInput;
