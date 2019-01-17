import * as React from 'react';
import ActionBar from '../../core/ActionBar';
import Button from '../../core/Button';
import TextField from '../../core/TextField';
import ThemeSelector from '../../core/ThemeSelector';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import * as D from '../../devices/DeviceTypes';
import Column from '../../layout/Column/Column';
import { Spacer } from '../../layout/Spacer/Spacer';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    scroll: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      flexShrink: 0,
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
    },

    inputs: {
      padding: theme.spacing.unit * 2,
    },
  });

export interface DeviceGroupSettingsFormProps extends WithStyles {
  onSubmit: (deviceGroup: D.DeviceGroup) => void;
  deviceGroup: D.DeviceGroup;
  disabled: boolean;
}

interface DeviceGroupSettingsFormState {
  deviceGroup: D.DeviceGroup;
}

export class DeviceGroupSettingsForm extends React.Component<
  DeviceGroupSettingsFormProps,
  DeviceGroupSettingsFormState
> {
  state = {
    deviceGroup: this.props.deviceGroup,
  };
  onSubmit = () => {
    const { onSubmit } = this.props;
    const { deviceGroup } = this.state;
    onSubmit(deviceGroup);
  };

  hasFormChanged = () => {
    const { deviceGroup } = this.props;
    const { name } = this.state.deviceGroup;
    return deviceGroup.name !== name;
  };

  render() {
    const { deviceGroup } = this.state;
    const { disabled, classes } = this.props;
    return (
      <ThemeSelector color="grey">
        <div className={classes.scroll}>
          <Column className={classes.inputs}>
            <TextField
              label="Group Name"
              value={deviceGroup.name}
              onChange={name => {
                this.setState({ deviceGroup: { ...deviceGroup, name } });
              }}
            />
          </Column>
          <Spacer />
          <ActionBar bottom condensed>
            <Spacer />
            <Button
              label="Save"
              color="primary"
              onClick={this.onSubmit}
              disabled={disabled || !this.hasFormChanged()}
            />
          </ActionBar>
        </div>
      </ThemeSelector>
    );
  }
}

export default withStyles(styles)(DeviceGroupSettingsForm);
