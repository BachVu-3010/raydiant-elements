import * as React from 'react';
import Checkbox from '../../core/Checkbox';
import DeviceItem, {
  DeviceBaseWithComputedProps,
  DeviceItemBaseProps,
} from './DeviceItem';
import DeviceList from './DeviceList';
import DeviceStatus from './DeviceStatus';

interface DeviceProps extends DeviceItemBaseProps {
  device: DeviceBaseWithComputedProps;
  wifiStrength?: number;
  isEthernet?: boolean;
  thumbnail?: string;
}

class Device extends React.Component<DeviceProps> {
  render() {
    const {
      isManageMode,
      isSelected,
      device,
      onConnectivityWizardClick,
      onPublish,
      disablePublish,
      onAddContent,
      wifiStrength,
      isEthernet,
      thumbnail,
    } = this.props;
    const { isOnline, hasFileError, isResin, needsPublish, id } = device;
    return (
      <DeviceItem
        controlsElement={
          isManageMode ? null : (
            <DeviceList.Controls
              showPublish={needsPublish}
              disablePublish={disablePublish}
              onPublish={() => onPublish(id)}
              onAddContent={() => onAddContent(id)}
            />
          )
        }
        checkboxElement={
          isManageMode ? <Checkbox checked={isSelected} /> : null
        }
        deviceStatusElement={
          <DeviceStatus
            isOnline={isOnline}
            hasFileError={hasFileError}
            onConnectivityWizardClick={onConnectivityWizardClick}
            isResin={isResin}
            wifiStrength={wifiStrength}
            isEthernet={isEthernet}
          />
        }
        thumbnail={thumbnail}
        {...this.props}
      />
    );
  }
}

export default Device;
