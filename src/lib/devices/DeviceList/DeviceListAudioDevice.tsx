import * as React from 'react';
import Button from '../../core/Button';
import withStyles, { WithStyles } from '../../core/withStyles';
import { stopPropagation } from '../../helpers';
import Hidden from '../../layout/Hidden';
import Row from '../../layout/Row';
import * as D from '../DeviceTypes';
import ConnectionStatus from './DeviceListConnectionStatus';
import styles from './DeviceListDevice.styles';

const audioDeviceThumbnailURL =
  'https://assets.raydiant.com/images/audio-device-thumbnail.svg';

export interface DeviceListAudioDevice extends WithStyles<typeof styles> {
  device: D.Device;
  signalStrength?: number;
  isOnline?: boolean;
  isEthernet?: boolean;
  isLTE?: boolean;
  onConnectivityWizard?: () => void;
  onSettings?: () => void;
  onClick?: () => void;
}

const DeviceListAudioDevice: React.SFC<DeviceListAudioDevice> = ({
  classes,
  device,
  signalStrength,
  isOnline,
  isEthernet,
  isLTE,
  onConnectivityWizard,
  onSettings,
  onClick,
}) => {
  return (
    <Row className={classes.root} center onClick={onClick}>
      <Row className={classes.deviceInfo} center>
        <Hidden smDown>
          <div
            style={{ backgroundImage: `url(${audioDeviceThumbnailURL})` }}
            className={classes.thumbnail}
          />
        </Hidden>
        <div>
          <div className={classes.name}>{device.name} [audio mode]</div>
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

      <Row className={classes.deviceActions} center>
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

export default withStyles(styles)(DeviceListAudioDevice);
