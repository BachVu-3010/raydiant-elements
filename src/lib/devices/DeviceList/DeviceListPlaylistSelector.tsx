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
  onSelectPlaylist?: (playlistId: string) => void;
  onEditPlaylist?: (playlistId: string) => void;
  onCreatePlaylist?: () => void;
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
  const allGroups = Object.values(playlistsByOwner);

  const allPlaylists = allGroups.reduce(
    (a, b) => {
      a.push(...b.playlists);
      return a;
    },
    [] as D.Playlist[],
  );

  const selectedPlaylist = allPlaylists.find(pl => pl.id === value);
  const playlistIsDeleted = value && !selectedPlaylist;
  const shouldAddEmptyOption = !value || playlistIsDeleted;
  const shouldDisabledSelect = !onSelectPlaylist;

  return (
    <div className={classes.root} onClick={stopPropagation()}>
      {allPlaylists.length === 0 ? (
        onCreatePlaylist && (
          <Button
            fullWidth
            color="primary"
            label="Create a Playlist"
            onClick={onCreatePlaylist}
          />
        )
      ) : (
        <Row>
          <SelectField
            label={shouldAddEmptyOption ? 'Select a playlist' : 'Playlist'}
            value={playlistIsDeleted ? '' : value}
            disabled={shouldDisabledSelect}
            onChange={playlistId => {
              if (playlistId === NEW_PLAYLIST_VALUE && onCreatePlaylist) {
                onCreatePlaylist();
              } else if (onSelectPlaylist) {
                onSelectPlaylist(playlistId);
              }
            }}
          >
            {shouldAddEmptyOption && <option value="" />}
            <option value={NEW_PLAYLIST_VALUE}>New Empty Playlist</option>
            <option value="new-separator" disabled>
              --------------------------
            </option>

            {myGroup.playlists.map(pl => (
              <option key={pl.id} value={pl.id}>
                {pl.name}
              </option>
            ))}

            {allGroups.map(({ profile, playlists }) => {
              if (profile.id === myGroup.profile.id) {
                return null;
              }

              return (
                <optgroup key={profile.id} label={profile.name}>
                  {playlists.map(pl => (
                    <option key={pl.id} value={pl.id}>
                      {pl.name}
                    </option>
                  ))}
                </optgroup>
              );
            })}
          </SelectField>

          {onEditPlaylist && (
            <Button
              icon="edit"
              disabled={shouldAddEmptyOption}
              onClick={() => onEditPlaylist(value)}
            />
          )}
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
