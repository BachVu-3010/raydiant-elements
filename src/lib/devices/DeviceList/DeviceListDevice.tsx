import * as React from 'react';
import Button from '../../core/Button';
import withStyles, { WithStyles } from '../../core/withStyles';
import { stopPropagation } from '../../helpers';
import Column from '../../layout/Column';
import Hidden from '../../layout/Hidden';
import Row from '../../layout/Row';
import Spacer from '../../layout/Spacer';
import * as D from '../DeviceTypes';
import ConnectionStatus from './DeviceListConnectionStatus';
import styles from './DeviceListDevice.styles';
import PlaylistSelector from './DeviceListPlaylistSelector';

export interface DeviceListDeviceProps extends WithStyles<typeof styles> {
  device: D.Device;
  playlists: D.Playlist[];
  thumbnail?: string;
  signalStrength?: number;
  isOnline?: boolean;
  isEthernet?: boolean;
  isLTE?: boolean;
  needsPublish?: boolean;
  disablePublish: boolean;
  onSelectPlaylist: (playlistId: string) => void;
  onEditPlaylist: (playlistId: string) => void;
  onCreatePlaylist: () => void;
  onPublish: () => void;
  onConnectivityWizard?: () => void;
  onSettings?: () => void;
  onClick?: () => void;
}

const DeviceListDeviceMobile: React.SFC<DeviceListDeviceProps> = ({
  classes,
  device,
  playlists,
  signalStrength,
  isOnline,
  isEthernet,
  isLTE,
  needsPublish,
  disablePublish,
  onSelectPlaylist,
  onEditPlaylist,
  onCreatePlaylist,
  onPublish,
  onConnectivityWizard,
  onSettings,
}) => {
  const playlist = playlists.find(pl => pl.id === device.playlistId);

  return (
    <Column className={classes.root}>
      <Row center>
        <div className={classes.name}>{device.name}</div>
        <Spacer />
        {onSettings && (
          <Button icon="settings" hideBorder onClick={onSettings} />
        )}
      </Row>

      <Row center>
        <PlaylistSelector
          value={playlist ? playlist.id : ''}
          playlists={playlists}
          onSelectPlaylist={onSelectPlaylist}
          onEditPlaylist={onEditPlaylist}
          onCreatePlaylist={onCreatePlaylist}
        />

        {needsPublish && (
          <Button
            color="progress"
            icon="publish"
            disabled={disablePublish}
            onClick={onPublish}
          />
        )}
      </Row>

      <ConnectionStatus
        device={device}
        signalStrength={signalStrength}
        isOnline={isOnline}
        isEthernet={isEthernet}
        isLTE={isLTE}
        onConnectivityWizard={onConnectivityWizard}
      />
    </Column>
  );
};

const DeviceListDeviceDesktop: React.SFC<DeviceListDeviceProps> = ({
  classes,
  device,
  playlists,
  thumbnail,
  signalStrength,
  isOnline,
  isEthernet,
  isLTE,
  needsPublish,
  disablePublish,
  onSelectPlaylist,
  onEditPlaylist,
  onCreatePlaylist,
  onPublish,
  onConnectivityWizard,
  onSettings,
  onClick,
}) => {
  const playlist = playlists.find(pl => pl.id === device.playlistId);

  return (
    <Row className={classes.root} center onClick={onClick}>
      <Row className={classes.deviceInfo} center>
        <Hidden smDown>
          <div
            style={{ backgroundImage: thumbnail ? `url(${thumbnail})` : '' }}
            className={classes.thumbnail}
          />
        </Hidden>
        <div>
          <div className={classes.name}>{device.name}</div>
          <ConnectionStatus
            device={device}
            signalStrength={signalStrength}
            isOnline={isOnline}
            isEthernet={isEthernet}
            isLTE={isLTE}
            onConnectivityWizard={onConnectivityWizard}
          />
        </div>
      </Row>

      <PlaylistSelector
        value={playlist ? playlist.id : ''}
        playlists={playlists}
        onSelectPlaylist={onSelectPlaylist}
        onEditPlaylist={onEditPlaylist}
        onCreatePlaylist={onCreatePlaylist}
      />

      <Row className={classes.deviceActions} center>
        {needsPublish && (
          <Button
            color="progress"
            icon="publish"
            label="Publish"
            disabled={disablePublish}
            onClick={stopPropagation(onPublish)}
          />
        )}

        {onSettings && (
          <Button
            icon="settings"
            hideBorder
            onClick={stopPropagation(onSettings)}
          />
        )}
      </Row>
    </Row>
  );
};

export const DeviceListDevice: React.SFC<DeviceListDeviceProps> = props => (
  <>
    <Hidden xsDown>
      <DeviceListDeviceDesktop {...props} />
    </Hidden>
    <Hidden smUp>
      <DeviceListDeviceMobile {...props} />
    </Hidden>
  </>
);

export default withStyles(styles)(DeviceListDevice);
