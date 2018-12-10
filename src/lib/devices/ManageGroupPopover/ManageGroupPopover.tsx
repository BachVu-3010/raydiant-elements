import * as React from 'react';
import Button from '../../core/Button';
import Popover from '../../core/Popover';
import { pluralize } from '../../helpers';
import Spacer from '../../layout/Spacer';
import * as T from '../DeviceTypes';

export interface ManageGroupPopoverProps {
  onOverlayClick: () => void;
  onDeleteDeviceGroup: (deviceGroupId: string) => void;
  onRemoveDeviceFromDeviceGroup: (
    deviceGroupId: string,
    deviceId: string,
  ) => void;
  deviceGroup?: T.DeviceGroup;
  open: boolean;
  loading: boolean;
}

export interface ManageGroupPopoverState {
  isCreating: boolean;
}

export class ManageGroupPopover extends React.Component<
  ManageGroupPopoverProps,
  ManageGroupPopoverState
> {
  state = {
    isCreating: false,
  };
  render() {
    const {
      onOverlayClick,
      deviceGroup,
      open,
      onDeleteDeviceGroup,
      onRemoveDeviceFromDeviceGroup,
      loading,
    } = this.props;
    if (!deviceGroup) {
      return null;
    }
    const { devices } = deviceGroup;
    return (
      <Popover
        anchor={['top', 'right']}
        to={['bottom', 'right']}
        open={open}
        onOverlayClick={onOverlayClick}
        color="light"
      >
        <Popover.Header>{deviceGroup.name}</Popover.Header>
        <Popover.Body>
          <Popover.Item>
            <span>{pluralize('screen', devices.length)}</span>
            <Spacer />
            <Button
              label="Ungroup"
              color="destructive"
              onClick={() => onDeleteDeviceGroup(deviceGroup.id)}
              disabled={loading}
            />
            <Button label="Done" onClick={onOverlayClick} />
          </Popover.Item>
          {devices.map(d => (
            <Popover.Item key={d.id}>
              <div>{d.name}</div>
              <Spacer />
              <Button
                label="Remove"
                disabled={devices.length < 3 || loading}
                onClick={() =>
                  onRemoveDeviceFromDeviceGroup(deviceGroup.id, d.id)
                }
              />
            </Popover.Item>
          ))}
        </Popover.Body>
      </Popover>
    );
  }
}

export default ManageGroupPopover;
