import * as React from 'react';
import Button from '../../core/Button';
import SelectField from '../../core/SelectField';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import { stopPropagation } from '../../helpers';
import Row from '../../layout/Row';
import { Theme } from '../../theme';
import * as D from '../DeviceTypes';

interface PlaylistSelectorProps extends WithStyles<typeof styles> {
  value: string;
  playlistsByOwner: D.PlaylistsByOwner;
  currentUserProfileId: string;
  onSelectPlaylist: (playlistId: string) => void;
  onEditPlaylist: (playlistId: string) => void;
  onCreatePlaylist: () => void;
}

export const NEW_PLAYLIST_VALUE = 'new';

const PlaylistSelector: React.SFC<PlaylistSelectorProps> = ({
  classes,
  value,
  playlistsByOwner,
  currentUserProfileId,
  onCreatePlaylist,
  onEditPlaylist,
  onSelectPlaylist,
}) => {
  const myGroup = playlistsByOwner[currentUserProfileId];
  const otherGroups = Object.values(playlistsByOwner).filter(
    group => group.profile.id !== currentUserProfileId,
  );

  const totalPlaylists = Object.values(playlistsByOwner).reduce(
    (a, b) => a + b.playlists.length,
    0,
  );

  return (
    <div className={classes.root} onClick={stopPropagation()}>
      {totalPlaylists === 0 ? (
        <Button
          fullWidth
          color="primary"
          label="Create a Playlist"
          onClick={onCreatePlaylist}
        />
      ) : (
        <Row>
          <SelectField
            label={value ? 'Playlist' : 'Select a playlist'}
            value={value}
            onChange={playlistId => {
              if (playlistId === NEW_PLAYLIST_VALUE) {
                onCreatePlaylist();
              } else {
                onSelectPlaylist(playlistId);
              }
            }}
          >
            {!value && <option value="" />}
            <option value={NEW_PLAYLIST_VALUE}>New Empty Playlist</option>
            <option value="new-separator" disabled>
              --------------------------
            </option>

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
          </SelectField>
          <Button
            icon="edit"
            disabled={!value}
            onClick={() => onEditPlaylist(value)}
          />
        </Row>
      )}
    </div>
  );
};

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 280,

      [theme.breakpoints.down('xs')]: {
        maxWidth: 'none',
      },
    },
  });

export default withStyles(styles)(PlaylistSelector);
