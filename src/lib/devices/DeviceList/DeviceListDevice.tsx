import * as React from 'react';
import AlertIcon from '../../core/AlertIcon';
import Button from '../../core/Button';
import Link from '../../core/Link';
import SelectField from '../../core/SelectField';
import SuccessIcon from '../../core/SuccessIcon';
import withStyles, { WithStyles } from '../../core/withStyles';
import Row from '../../layout/Row';
import Text from '../../typography/Text';
import ConnectionIndicator from '../ConnectionIndicator/ConnectionIndicator';
import * as D from '../DeviceTypes';
import styles from './DeviceListDevice.styles';

export interface DeviceListDeviceProps extends WithStyles<typeof styles> {
  device: D.Device;
  playlists: D.Playlist[];
  thumbnail?: string;
  wifiStrength?: number;
  isEthernet?: boolean;
  needsPublish?: boolean;
  disablePublish: boolean;
  onSelectPlaylist: (playlistId: string) => void;
  onEditPlaylist: (playlistId: string) => void;
  onCreatePlaylist: () => void;
  onPublish: () => void;
  onConnectivityWizard?: () => void;
}

export const NEW_PLAYLIST_VALUE = 'new';

const DeviceListDevice: React.SFC<DeviceListDeviceProps> = ({
  classes,
  device,
  playlists,
  thumbnail,
  wifiStrength,
  isEthernet,
  needsPublish,
  disablePublish,
  onSelectPlaylist,
  onEditPlaylist,
  onCreatePlaylist,
  onPublish,
  onConnectivityWizard,
}) => {
  const playlist = playlists.find(pl => pl.id === device.playlistId);
  return (
    <Row className={classes.root} center>
      <Row className={classes.deviceInfo} center>
        <div
          style={{ backgroundImage: thumbnail ? `url(${thumbnail})` : '' }}
          className={classes.thumbnail}
        />
        <div>
          <div className={classes.name}>{device.name}</div>
          {device.resinUuid && (
            <div className={classes.status}>
              {device.isOnline ? <SuccessIcon /> : <AlertIcon />}
              {device.isOnline && (
                <ConnectionIndicator
                  wifiStrength={wifiStrength}
                  isEthernet={isEthernet}
                />
              )}
              {device.isOnline ? (
                <Text small>Online</Text>
              ) : (
                <Text small>Offline</Text>
              )}
              {!device.isOnline && onConnectivityWizard && (
                <Text small>
                  <Link onClick={onConnectivityWizard}>Need help?</Link>
                </Text>
              )}
            </div>
          )}
        </div>
      </Row>

      <div className={classes.playlistSelector}>
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
              value={playlist ? playlist.id : ''}
              onChange={playlistId => {
                if (playlistId === NEW_PLAYLIST_VALUE) {
                  onCreatePlaylist();
                } else {
                  onSelectPlaylist(playlistId);
                }
              }}
            >
              {!playlist && <option value="" />}
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
            <Button
              icon="edit"
              onClick={() => playlist && onEditPlaylist(playlist.id)}
            />
          </Row>
        )}
      </div>

      <Row className={classes.deviceActions} center>
        {needsPublish && (
          <Button
            color="progress"
            icon="publish"
            label="Publish"
            disabled={disablePublish}
            onClick={onPublish}
          />
        )}
      </Row>
    </Row>
  );
};

export default withStyles(styles)(DeviceListDevice);
