import * as React from 'react';
import Button from '../../core/Button';
import Checkbox from '../../core/Checkbox';
import { stopPropagation } from '../../helpers/index';
import DeviceBase, { DeviceBaseProps } from './DeviceBase';
import DeviceList from './DeviceList';

interface DeviceProps extends DeviceBaseProps {
  onManageGroupClick: (selectedGroupIdToManage: string) => any;
}

class Device extends React.Component<DeviceProps> {
  render() {
    const { isManageMode, onManageGroupClick, device } = this.props;
    return (
      <DeviceBase
        controlsElement={
          isManageMode ? (
            <Button onClick={stopPropagation(onManageGroupClick(device.id))}>
              Manage Group
            </Button>
          ) : (
            <DeviceList.Controls showPublish={true} />
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
        showMultipleThumbnails={true}
        {...this.props}
      />
    );
  }
}

export default Device;
