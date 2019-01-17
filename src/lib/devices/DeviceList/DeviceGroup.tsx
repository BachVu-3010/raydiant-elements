import * as React from 'react';
import Button from '../../core/Button';
import Checkbox from '../../core/Checkbox';
import { stopPropagation } from '../../helpers/index';
import DeviceList from './DeviceList';
import DeviceStatus from './DeviceStatus';
import Item, { DeviceBaseWithComputedProps, ItemBaseProps } from './Item';

interface DeviceGroupStats {
  resinCount: number;
  onlineCount: number;
  deviceCount: number;
  devicesWithErrorsCount: number;
}

export type DeviceGroupWithComputedProps = DeviceBaseWithComputedProps &
  DeviceGroupStats;

interface DeviceGroupProps extends ItemBaseProps {
  onManageGroupClick: (selectedGroupIdToManage: string) => void;
  deviceGroup: DeviceGroupWithComputedProps;
}

class DeviceGroup extends React.Component<DeviceGroupProps> {
  render() {
    const {
      isManageMode,
      onManageGroupClick,
      deviceGroup,
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
      <Item
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
