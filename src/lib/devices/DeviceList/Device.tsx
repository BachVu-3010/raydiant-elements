import * as React from 'react';
import Checkbox from '../../core/Checkbox';
import DeviceList from './DeviceList';
import DeviceStatus from './DeviceStatus';
import Item, { DeviceBaseWithComputedProps, ItemBaseProps } from './Item';

interface DeviceProps extends ItemBaseProps {
  device: DeviceBaseWithComputedProps;
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
    } = this.props;
    const { isOnline, hasFileError, isResin, needsPublish, id } = device;
    return (
      <Item
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
          />
        }
        {...this.props}
      />
    );
  }
}

export default Device;
