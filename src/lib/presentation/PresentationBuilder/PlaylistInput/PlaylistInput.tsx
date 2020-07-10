import * as React from 'react';
import Button from '../../../core/Button';
import SelectField from '../../../core/SelectField';
import Row from '../../../layout/Row';
import * as P from '../../PresentationTypes';

interface PlaylistInputProps {
  label: string;
  value: string;
  propertyTypeIndex: number;
  playlistsByOwner: P.PlaylistsByOwner;
  currentUserProfileId: string;
  helperText: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  onChange: (value: string) => any;
  onBlur: React.FocusEventHandler<any>;
  onEdit?: (value: string) => void;
  onCreate?: () => void;
}

export const NEW_PLAYLIST_VALUE = 'new';

class PlaylistInput extends React.Component<PlaylistInputProps> {
  onChangeTimeout: number;

  componentDidMount() {
    const { playlistsByOwner } = this.props;
    const allPlaylists = this.getAllPlaylists(playlistsByOwner);
    this.checkDefaultValue(allPlaylists);
  }

  componentDidUpdate(prevProps: PlaylistInputProps) {
    const { playlistsByOwner } = this.props;

    const allPlaylists = this.getAllPlaylists(playlistsByOwner);
    const allPrevPlaylists = this.getAllPlaylists(prevProps.playlistsByOwner);

    const didPlaylistsChange =
      allPlaylists.length !== allPrevPlaylists.length ||
      allPlaylists.some((p, i) => p.id !== allPrevPlaylists[i].id);

    if (didPlaylistsChange) {
      this.checkDefaultValue(allPlaylists);
    }
  }

  getAllPlaylists(playlistsById: P.PlaylistsByOwner) {
    const allPlaylists: P.Playlist[] = [];
    Object.values(playlistsById).forEach(({ playlists }) => {
      allPlaylists.push(...playlists);
    });
    return allPlaylists;
  }

  checkDefaultValue(allPlaylists: P.Playlist[]) {
    const { value, propertyTypeIndex, onChange } = this.props;
    // Set default playlist if one doesn't exist. Uses propertyTypeIndex to pick
    // another playlist when there are multiple zones.
    if (
      allPlaylists.length > 0 &&
      (!value || !this.isValueInPlaylists(allPlaylists))
    ) {
      this.onChangeTimeout = setTimeout(() => {
        // This ensures we pick the second playlist as the default for zone2 of MZ
        // if there is more than one user playlist.
        const defaultPlaylistIndex = Math.min(
          propertyTypeIndex,
          allPlaylists.length - 1,
        );
        onChange(allPlaylists[defaultPlaylistIndex].id);
      });
    }
  }

  isValueInPlaylists(playlists: P.Playlist[]) {
    const { value } = this.props;
    return !!playlists.map(pl => pl.id).includes(value);
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
      playlistsByOwner,
      currentUserProfileId,
      helperText,
      error,
      disabled,
      onBlur,
      onEdit,
      onCreate,
    } = this.props;

    const myGroup = playlistsByOwner[currentUserProfileId];
    const otherGroups = Object.values(playlistsByOwner).filter(
      group => group.profile.id !== currentUserProfileId,
    );

    const totalPlaylists = Object.values(playlistsByOwner).reduce(
      (a, b) => a + b.playlists.length,
      0,
    );

    if (onCreate && totalPlaylists === 0) {
      return (
        <Button
          color="primary"
          label={`Create a Playlist for ${label}`}
          onClick={onCreate}
          disabled={disabled}
        />
      );
    }

    const valueOrDefault =
      value ||
      (totalPlaylists !== 0
        ? this.getAllPlaylists(playlistsByOwner)[0].id
        : '');

    return (
      <Row>
        <SelectField
          label={label}
          value={valueOrDefault}
          onChange={this.handleChange}
          onBlur={onBlur}
          helperText={helperText}
          error={error}
          disabled={disabled}
        >
          {onCreate && (
            <>
              <option value={NEW_PLAYLIST_VALUE}>New Empty Playlist</option>
              <option value="new-separator" disabled>
                --------------------------
              </option>
            </>
          )}

          {myGroup.playlists.map(pl => (
            <option key={pl.id} value={pl.id}>
              {pl.name}
            </option>
          ))}

          {otherGroups.map(({ profile, playlists }) => (
            <optgroup key={profile.id} label={profile.name}>
              {playlists.map(pl => (
                <option key={pl.id} value={pl.id}>
                  {pl.name}
                </option>
              ))}
            </optgroup>
          ))}

          {totalPlaylists === 0 && <option disabled>No playlists found</option>}
        </SelectField>
        {onEdit && (
          <Button
            icon="edit"
            disabled={disabled}
            onClick={() => onEdit(valueOrDefault)}
          />
        )}
      </Row>
    );
  }
}

export default PlaylistInput;
