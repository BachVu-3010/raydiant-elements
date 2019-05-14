import * as React from 'react';
import AlertIcon from '../../core/AlertIcon';
import Link from '../../core/Link';
import SuccessIcon from '../../core/SuccessIcon';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import { stopPropagation } from '../../helpers';
import { Theme } from '../../theme';
import Text from '../../typography/Text';
import ConnectionIndicator from '../ConnectionIndicator/ConnectionIndicator';

enum Errors {
  Offline = 'Offline',
  SomeOffline = 'Some Offline',
  Generic = 'Oops! Something went wrong!',
}

export interface DeviceStatusProps extends WithStyles<typeof styles> {
  hasFileError: boolean;
  isOnline: boolean;
  onConnectivityWizardClick: () => void;
  onlineCount?: number;
  deviceCount?: number;
  resinCount?: number;
  isResin?: boolean;
  devicesWithErrorsCount?: number;
  wifiStrength?: number;
  isEthernet?: boolean;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      fontSize: theme.fontSizes.sm,
    },
    deviceStatusIconContainer: {
      display: 'flex',
      marginRight: theme.spacing.unit / 2,
    },
    deviceConnectionStatusIconContainer: {
      display: 'flex',
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    }
  });

export class DeviceStatus extends React.Component<DeviceStatusProps> {
  renderDeviceError = () => {
    const { isOnline, hasFileError, isResin } = this.props;
    let element;
    if (!isOnline && isResin) {
      element = this.renderError(Errors.Offline, {
        severity: 'error',
        showConnectivityWizard: true,
      });
    } else if (hasFileError) {
      element = this.renderError(Errors.Generic, { severity: 'error' });
    }
    return element;
  };
  renderError = (
    error: string,
    {
      severity,
      showConnectivityWizard,
    }: {
      severity: 'default' | 'error' | 'warning';
      showConnectivityWizard?: boolean;
    },
  ) => {
    const { classes, onConnectivityWizardClick } = this.props;
    // This is for the scenario where the device !isResin && !hasFileError
    if (!error) {
      return null;
    }

    return (
      <>
        <div className={classes.deviceStatusIconContainer}>
          <AlertIcon color={severity} />
        </div>
        <div>
          <Text muted>{error}</Text>{' '}
          {showConnectivityWizard && (
            <Link onClick={stopPropagation(onConnectivityWizardClick)}>
              Need help?
            </Link>
          )}
        </div>
      </>
    );
  };
  renderOnlineStatus = () => {
    const { classes, wifiStrength, isEthernet } = this.props;
    return (
      <>
        <div className={classes.deviceStatusIconContainer}>
          <SuccessIcon />
        </div>
        <div className={classes.deviceConnectionStatusIconContainer}>
          <ConnectionIndicator wifiStrength={wifiStrength} isEthernet={isEthernet} />
        </div>
        <Text muted>Online</Text>
      </>
    );
  };
  renderDeviceGroupStatus = () => {
    const {
      deviceCount,
      resinCount,
      onlineCount,
      devicesWithErrorsCount,
    } = this.props;
    const allResin = deviceCount === resinCount;
    let element;
    if (allResin && onlineCount === 0) {
      element = this.renderError(Errors.Offline, {
        severity: 'error',
        showConnectivityWizard: true,
      });
    } else if (allResin && deviceCount > onlineCount) {
      element = this.renderError(Errors.SomeOffline, {
        severity: 'warning',
        showConnectivityWizard: true,
      });
    } else if (devicesWithErrorsCount === deviceCount) {
      element = this.renderError(Errors.Generic, {
        severity: 'error',
      });
    } else if (devicesWithErrorsCount > 0) {
      element = this.renderError(Errors.Generic, { severity: 'warning' });
    } else if (allResin && deviceCount === onlineCount) {
      element = this.renderOnlineStatus();
    }
    return element;
  };

  render() {
    const { isOnline, hasFileError, classes, deviceCount } = this.props;
    // Using deviceCount to test if a DeviceGroup is passed in.
    const isDeviceGroup = !isNaN(deviceCount);

    if (isDeviceGroup) {
      return (
        <div className={classes.root}>{this.renderDeviceGroupStatus()}</div>
      );
    }

    const isError = !isOnline || hasFileError;
    return (
      <div className={classes.root}>
        {isError ? this.renderDeviceError() : this.renderOnlineStatus()}
      </div>
    );
  }
}

export default withStyles(styles)(DeviceStatus);
