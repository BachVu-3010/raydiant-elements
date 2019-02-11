import * as React from 'react';
import ActionBar from '../../core/ActionBar';
import Button from '../../core/Button';
import Form from '../../core/Form';
import SelectField from '../../core/SelectField';
import TextField from '../../core/TextField';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import withThemeSelector from '../../core/withThemeSelector';
import * as D from '../../devices/DeviceTypes';
import Column from '../../layout/Column';
import Row from '../../layout/Row';
import { Spacer } from '../../layout/Spacer/Spacer';
import { scrollable } from '../../mixins';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    scroll: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      ...scrollable(),
    },
    inputs: {
      flexShrink: 0,
      padding: theme.spacing.unit * 2,
    },
    screenInformationContainer: {
      display: 'flex',
    },
  });

export enum resolutionOptions {
  '1920x1080' = '1080p',
  '1280x720' = '720p',
}

export enum orientationOptions {
  normal = 'Normal',
  right = 'Vertical (Right)',
  left = 'Vertical (Left)',
}

export interface DeviceSettingsFormProps extends WithStyles {
  onSubmit: (device: D.Device) => void;
  device: D.Device;
  onRestartDevice: (id: string) => void;
  disabled: boolean;
}

interface DeviceSettingsFormState {
  device: D.Device;
}

export class DeviceSettingsForm extends React.Component<
  DeviceSettingsFormProps,
  DeviceSettingsFormState
> {
  state = {
    device: this.props.device,
  };
  onSubmit = () => {
    const { onSubmit } = this.props;
    const { device } = this.state;
    onSubmit(device);
  };

  hasFormChanged = () => {
    const { device } = this.props;
    const {
      name,
      screenDimensions,
      screenOrientation,
      description,
    } = this.state.device;
    return (
      device.name !== name ||
      device.screenDimensions !== screenDimensions ||
      device.screenOrientation !== screenOrientation ||
      device.description !== description
    );
  };

  render() {
    const { classes, disabled } = this.props;
    const { device } = this.state;

    return (
      <Form className={classes.root} onSubmit={this.onSubmit}>
        <div className={classes.scroll}>
          <Column className={classes.inputs}>
            <TextField
              label="Screen Name"
              value={device.name}
              helperText={`MAC Address: ${device.id}`}
              onChange={name => {
                this.setState({ device: { ...device, name } });
              }}
            />
            <Row className={classes.screenInformationContainer}>
              <SelectField
                label="Screen Resolution"
                value={device.screenDimensions}
                onChange={screenDimensions => {
                  this.setState({ device: { ...device, screenDimensions } });
                }}
              >
                {Object.entries(resolutionOptions).map(([k, v]) => (
                  <option value={k} key={k}>
                    {v}
                  </option>
                ))}
              </SelectField>
              <SelectField
                label="Screen Orientation"
                value={device.screenOrientation}
                onChange={(screenOrientation: D.ScreenOrientation) => {
                  this.setState({ device: { ...device, screenOrientation } });
                }}
              >
                {Object.entries(orientationOptions).map(([k, v]) => (
                  <option value={k} key={k}>
                    {v}
                  </option>
                ))}
              </SelectField>
            </Row>
            <Row>
              <TextField
                multiline
                label="Notes"
                value={device.description}
                onChange={description => {
                  this.setState({ device: { ...device, description } });
                }}
              />
            </Row>
          </Column>
        </div>
        <ActionBar bottom condensed>
          <Button
            label="Restart"
            onClick={() => this.props.onRestartDevice(device.id)}
            disabled={disabled}
          />
          <Spacer />
          <Button
            type="submit"
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
  withStyles(styles)(DeviceSettingsForm),
  'grey',
);
