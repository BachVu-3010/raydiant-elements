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
  playlists: D.Playlist[];
  onSelectPlaylist: (playlistId: string) => void;
  onEditPlaylist: (playlistId: string) => void;
  onCreatePlaylist: () => void;
}

export const NEW_PLAYLIST_VALUE = 'new';

const PlaylistSelector: React.SFC<PlaylistSelectorProps> = ({
  classes,
  value,
  playlists,
  onCreatePlaylist,
  onEditPlaylist,
  onSelectPlaylist,
}) => (
  <div className={classes.root} onClick={stopPropagation()}>
    {playlists.length === 0 ? (
      <Button
        fullWidth
        color="primary"
        label="Create a Playlist"
        onClick={onCreatePlaylist}
      />
    ) : (
      <Row>
        <SelectField
          label="Playlist"
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
          {playlists.map(pl => (
            <option key={pl.id} value={pl.id}>
              {pl.name}
            </option>
          ))}
        </SelectField>
        <Button icon="edit" onClick={() => onEditPlaylist(value)} />
      </Row>
    )}
  </div>
);

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
