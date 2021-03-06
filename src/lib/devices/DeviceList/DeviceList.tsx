import * as React from 'react';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import withThemeSelector from '../../core/withThemeSelector';
import { Theme } from '../../theme';
import DeviceListAudioDevice from './DeviceListAudioDevice';
import DeviceListDevice from './DeviceListDevice';

export interface DeviceListProps extends WithStyles<typeof styles> {}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(2),
      },
    },
  });

export const DeviceList: React.SFC<DeviceListProps> = ({
  classes,
  children,
}) => <span className={classes.root}>{children}</span>;

export default Object.assign(
  withThemeSelector(withStyles(styles)(DeviceList)),
  {
    Device: DeviceListDevice,
    AudioDevice: DeviceListAudioDevice,
  },
);
