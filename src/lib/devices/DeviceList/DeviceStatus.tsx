import * as React from 'react';
import AlertIcon from '../../core/AlertIcon';
import Link from '../../core/Link';
import SuccessIcon from '../../core/SuccessIcon';
import Text from '../../core/Text';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import { stopPropagation } from '../../helpers';
import { Theme } from '../../theme';

enum Errors {
  Offline = 'Offline',
  Generic = 'Oops! Something went wrong!',
}

const getError = (isOnline: boolean, hasFileError: boolean): string => {
  let error = '';
  if (!isOnline) {
    error = Errors.Offline;
  } else if (hasFileError) {
    error = Errors.Generic;
  }
  return error;
};

export interface DeviceStatusProps extends WithStyles<typeof styles> {
  hasFileError: boolean;
  isOnline: boolean;
  onConnectivityWizardClick: () => void;
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
  });

export const DeviceStatus: React.SFC<DeviceStatusProps> = props => {
  const { isOnline, hasFileError, classes, onConnectivityWizardClick } = props;
  const hasError = !isOnline || hasFileError;

  return (
    <div className={classes.root}>
      {hasError ? (
        <>
          <div className={classes.deviceStatusIconContainer}>
            <AlertIcon />
          </div>
          <div>
            <Text muted>{getError(isOnline, hasFileError)}</Text>{' '}
            <Link onClick={stopPropagation(onConnectivityWizardClick)} />
          </div>
        </>
      ) : (
        <>
          <div className={classes.deviceStatusIconContainer}>
            <SuccessIcon />
          </div>
          <Text muted>Online</Text>
        </>
      )}
    </div>
  );
};

export default withStyles(styles)(DeviceStatus);
