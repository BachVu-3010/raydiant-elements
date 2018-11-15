import * as React from 'react';
import AlertIcon from '../../core/AlertIcon';
import Button from '../../core/Button';
import Popover from '../../core/Popover';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import { Theme } from '../../theme';
import * as T from '../DeviceTypes';

interface AffectedScreensPopoverProps extends WithStyles<typeof styles> {
  devices: T.Device[];
  open: boolean;
  onClose: () => void;
}

const styles = (theme: Theme) =>
  createStyles({
    warning: {
      display: 'flex',
    },
    icon: {
      marginRight: theme.spacing.unit,
    },
  });

export const AffectedScreensPopover: React.SFC<AffectedScreensPopoverProps> = ({
  devices = [],
  open,
  onClose,
  classes,
}) => (
  <Popover
    anchor={['bottom', 'left']}
    to={['top', 'left']}
    open={open}
    onOverlayClick={onClose}
    color="grey"
  >
    <Popover.Header>
      <div className={classes.warning}>
        <span className={classes.icon}>
          <AlertIcon color="warning" />
        </span>
        Saving these changes will overwrite content on these screens:
      </div>
      <Button label="Got it" onClick={onClose} />
    </Popover.Header>
    <Popover.Body>
      {devices.map(device => (
        <Popover.Item key={device.id}>{device.name}</Popover.Item>
      ))}
    </Popover.Body>
  </Popover>
);

export default withStyles(styles)(AffectedScreensPopover);
