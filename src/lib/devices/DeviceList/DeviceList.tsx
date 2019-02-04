import * as React from 'react';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import withThemeSelector from '../../core/withThemeSelector';
import { scrollable } from '../../mixins';
import { Theme } from '../../theme';
import Controls from './Controls';
import Device from './Device';
import DeviceGroup from './DeviceGroup';
import Thumbnail from './Thumbnail';

export interface DeviceListProps extends WithStyles<typeof styles> {}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...scrollable(),

      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing.unit * 2,
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
    Device,
    DeviceGroup,
    Controls,
    Thumbnail,
  },
);
