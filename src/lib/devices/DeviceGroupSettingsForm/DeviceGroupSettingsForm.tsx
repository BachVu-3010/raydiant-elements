import * as React from 'react';
import ActionBar from '../../core/ActionBar';
import Button from '../../core/Button';
import Form from '../../core/Form';
import TextField from '../../core/TextField';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import withThemeSelector from '../../core/withThemeSelector';
import * as D from '../../devices/DeviceTypes';
import Column from '../../layout/Column/Column';
import { Spacer } from '../../layout/Spacer/Spacer';
import { scrollable } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
    scroll: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      flexShrink: 0,
      ...scrollable(),
    },

    inputs: {
      flexShrink: 0,
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
      <Form className={classes.root} onSubmit={this.onSubmit}>
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
        </div>
        <ActionBar bottom condensed>
          <Spacer />
          <Button
            label="Save"
            color="primary"
            disabled={disabled || !this.hasFormChanged()}
          />
        </ActionBar>
      </Form>
    );
  }
}

export default withThemeSelector(
  withStyles(styles)(DeviceGroupSettingsForm),
  'grey',
);
