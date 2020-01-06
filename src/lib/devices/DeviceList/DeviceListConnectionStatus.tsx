import * as React from 'react';
import AlertIcon from '../../core/AlertIcon';
import Link from '../../core/Link';
import SuccessIcon from '../../core/SuccessIcon';
import { stopPropagation } from '../../helpers';
import Row from '../../layout/Row';
import Text from '../../typography/Text';
import ConnectionIndicator from '../ConnectionIndicator/ConnectionIndicator';
import * as D from '../DeviceTypes';

interface ConnectionStatusProps {
  device: D.Device;
  wifiStrength?: number;
  isEthernet?: boolean;
  onConnectivityWizard?: () => void;
}

export const NEW_PLAYLIST_VALUE = 'new';

const ConnectionStatus: React.SFC<ConnectionStatusProps> = ({
  device,
  wifiStrength,
  isEthernet,
  onConnectivityWizard,
}) => {
  if (!device.resinUuid) {
    return null;
  }

  return (
    <Row halfMargin center>
      {device.isOnline ? <SuccessIcon /> : <AlertIcon />}
      {device.isOnline && (
        <ConnectionIndicator
          wifiStrength={wifiStrength}
          isEthernet={isEthernet}
        />
      )}
      {device.isOnline ? <Text small>Online</Text> : <Text small>Offline</Text>}
      {!device.isOnline && onConnectivityWizard && (
        <Text small>
          <Link onClick={stopPropagation(onConnectivityWizard)}>
            Need help?
          </Link>
        </Text>
      )}
    </Row>
  );
};

export default ConnectionStatus;
