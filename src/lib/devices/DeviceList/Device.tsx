import * as React from 'react';
import Checkbox from '../../core/Checkbox';
import DeviceBase, { DeviceBaseProps } from './DeviceBase';
import DeviceList from './DeviceList';
import DeviceStatus from './DeviceStatus';

class Device extends React.Component<DeviceBaseProps> {
  render() {
    const {
      isManageMode,
      isSelected,
      device,
      onConnectivityWizardClick,
      onPublish,
      disablePublish,
    } = this.props;
    const { isOnline, hasFileError, isResin, needsPublish, id } = device;
    return (
      <DeviceBase
        controlsElement={
          isManageMode ? null : (
            <DeviceList.Controls
              showPublish={needsPublish}
              onPublish={() => onPublish(id)}
              disablePublish={disablePublish}
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
          />
        }
        {...this.props}
      />
    );
  }
}

export default Device;
