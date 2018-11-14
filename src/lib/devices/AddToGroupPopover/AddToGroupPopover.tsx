import * as React from 'react';
import Button from '../../core/Button';
import Icon from '../../core/Icon';
import Popover from '../../core/Popover';
import TextField from '../../core/TextField';
import { pluralize } from '../../helpers';
import Row from '../../layout/Row';
import * as T from '../DeviceTypes';

export interface AddToGroupPopoverProps {
  selectedDeviceIds: string[];
  deviceGroups: T.DeviceGroup[];
  onOverlayClick: () => void;
  deviceToInheritContentFrom: T.Device | undefined;
  open: boolean;
}

export interface AddToGroupPopoverState {
  isCreating: boolean;
}

export class AddToGroupPopover extends React.Component<
  AddToGroupPopoverProps,
  AddToGroupPopoverState
> {
  state = {
    isCreating: false,
  };

  getGroupName = () => {
    const { deviceToInheritContentFrom } = this.props;
    return deviceToInheritContentFrom && `${deviceToInheritContentFrom.name}`;
  };

  getSuggestedGroupName = () => {
    return `${this.getGroupName() || 'New'} Group`;
  };

  render() {
    const { isCreating } = this.state;
    const {
      selectedDeviceIds,
      deviceGroups,
      onOverlayClick,
      open,
    } = this.props;
    return (
      <Popover
        anchor={['top', 'right']}
        to={['bottom', 'right']}
        open={open}
        onOverlayClick={onOverlayClick}
        color="light"
      >
        <Popover.Header>
          Add {pluralize('screen', selectedDeviceIds.length)} to
        </Popover.Header>
        <Popover.Body>
          {deviceGroups.map(dg => (
            <Popover.Item key={dg.id}>
              <Icon icon="group" title="group" />
              <span>{dg.name}</span>
            </Popover.Item>
          ))}
          {selectedDeviceIds.length > 1 && (
            <>
              {isCreating ? (
                <Popover.Item>
                  <Row>
                    <div style={{ fontWeight: 'normal' }}>
                      <TextField
                        label="Group Name"
                        value={this.getSuggestedGroupName()}
                        helperText={
                          this.getGroupName() &&
                          `Group will inherit content from "${this.getGroupName()}" screen`
                        }
                      />
                    </div>
                    <Button label="Create" color="progress" />
                  </Row>
                </Popover.Item>
              ) : (
                <Popover.Item
                  onClick={() => {
                    this.setState({ isCreating: true });
                  }}
                >
                  <Icon icon="add" />
                  <span>Create new group</span>
                </Popover.Item>
              )}
            </>
          )}
        </Popover.Body>
      </Popover>
    );
  }
}

export default AddToGroupPopover;
