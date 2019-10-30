import * as React from 'react';
import Button from '../../core/Button';
import Checkbox from '../../core/Checkbox';
import { stopPropagation } from '../../helpers';
import DeviceItem, {
  DeviceBaseWithComputedProps,
  DeviceItemBaseProps,
} from './DeviceItem';
import DeviceList from './DeviceList';
import DeviceStatus from './DeviceStatus';

interface DeviceGroupStats {
  resinCount: number;
  onlineCount: number;
  deviceCount: number;
  devicesWithErrorsCount: number;
}

export type DeviceGroupWithComputedProps = DeviceBaseWithComputedProps &
  DeviceGroupStats;

interface DeviceGroupProps extends DeviceItemBaseProps {
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
      onAddContent,
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
      <DeviceItem
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
              disablePublish={disablePublish}
              onPublish={() => onPublish(id)}
              onAddContent={() => onAddContent(id)}
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
