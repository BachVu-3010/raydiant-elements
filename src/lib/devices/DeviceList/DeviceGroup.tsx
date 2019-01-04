import * as React from 'react';
import Button from '../../core/Button';
import Checkbox from '../../core/Checkbox';
import { stopPropagation } from '../../helpers/index';
import DeviceBase, { DeviceBaseProps } from './DeviceBase';
import DeviceList from './DeviceList';
import DeviceStatus from './DeviceStatus';

interface DeviceGroupProps extends DeviceBaseProps {
  onManageGroupClick: (selectedGroupIdToManage: string) => void;
}

class DeviceGroup extends React.Component<DeviceGroupProps> {
  render() {
    const {
      isManageMode,
      onManageGroupClick,
      // Aliasing Device -> DeviceGroup as <DeviceBase /> is expecting a `device` prop - may be worth updating
      // <DeviceBase /> to take in a Device or DeviceGroup - instead of a Device (which can be of type: Device | DeviceGroup)
      device: deviceGroup,
      onConnectivityWizardClick,
      onPublish,
      disablePublish,
    } = this.props;
    const {
      isOnline,
      hasFileError,
      onlineCount,
      resinCount,
      deviceCount,
      devicesWithErrorsCount,
      needsPublish,
      id,
    } = deviceGroup;
    return (
      <DeviceBase
        controlsElement={
          isManageMode ? (
            <Button
              onClick={stopPropagation(() =>
                onManageGroupClick(deviceGroup.id),
              )}
            >
              Manage Group
            </Button>
          ) : (
            <DeviceList.Controls
              showPublish={needsPublish}
              onPublish={() => onPublish(id)}
              disablePublish={disablePublish}
            />
          )
        }
        checkboxElement={
          isManageMode ? (
            // used purerly to preserve the space the checkbox occupies
            <div style={{ visibility: 'hidden' }}>
              <Checkbox checked={false} />
            </div>
          ) : null
        }
        deviceStatusElement={
          <DeviceStatus
            isOnline={isOnline}
            hasFileError={hasFileError}
            onConnectivityWizardClick={onConnectivityWizardClick}
            onlineCount={onlineCount}
            resinCount={resinCount}
            deviceCount={deviceCount}
            devicesWithErrorsCount={devicesWithErrorsCount}
          />
        }
        showMultipleThumbnails={true}
        {...this.props}
      />
    );
  }
}

export default DeviceGroup;
