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
    } = this.props;
    const {
      isOnline,
      hasAFileError,
      isResin,
      needsPublish,
      id,
      isPublishing,
    } = device;
    return (
      <DeviceBase
        controlsElement={
          isManageMode ? null : (
            <DeviceList.Controls
              showPublish={needsPublish}
              onPublish={() => onPublish(id)}
              isPublishing={isPublishing}
            />
          )
        }
        checkboxElement={
          isManageMode ? <Checkbox checked={isSelected} /> : null
        }
        deviceStatusElement={
          <DeviceStatus
            isOnline={isOnline}
            hasAFileError={hasAFileError}
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
