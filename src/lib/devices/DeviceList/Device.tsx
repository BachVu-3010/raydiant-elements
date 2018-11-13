import * as React from 'react';
import Checkbox from '../../core/Checkbox';
import DeviceBase, { DeviceBaseProps } from './DeviceBase';
import DeviceList from './DeviceList';

class Device extends React.Component<DeviceBaseProps> {
  render() {
    const { isManageMode, isSelected } = this.props;
    return (
      <DeviceBase
        controlsElement={
          isManageMode ? null : <DeviceList.Controls showPublish={true} />
        }
        checkboxElement={
          isManageMode ? <Checkbox checked={isSelected} /> : null
        }
        {...this.props}
      />
    );
  }
}

export default Device;
