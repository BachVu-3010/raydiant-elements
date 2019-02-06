import * as React from 'react';
import AlertIcon from '../../core/AlertIcon';
import Button from '../../core/Button';
import Popover from '../../core/Popover';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import Hidden from '../../layout/Hidden';
import Spacer from '../../layout/Spacer';
import { Theme } from '../../theme';
import * as T from '../DeviceTypes';

interface AffectedDevicesPopoverProps extends WithStyles<typeof styles> {
  devices: T.Device[];
  open: boolean;
  isDeleting?: boolean;
  onClose: () => void;
  onDelete?: () => void;
  testId?: string;
}

const styles = (theme: Theme) =>
  createStyles({
    warning: {
      display: 'flex',
      fontSize: theme.fontSizes.sm,
      marginRight: theme.spacing.unit,
      lineHeight: 1.5,
    },
    icon: {
      marginRight: theme.spacing.unit,
    },
  });

export const AffectedDevicesPopover: React.SFC<AffectedDevicesPopoverProps> = ({
  devices = [],
  open,
  isDeleting,
  onClose,
  onDelete,
  classes,
  testId,
}) => {
  const screensText = devices.length === 1 ? 'this screen' : 'these screens';
  return (
    <Popover
      anchor={isDeleting ? ['top', 'right'] : ['bottom', 'left']}
      to={isDeleting ? ['bottom', 'right'] : ['top', 'left']}
      open={open}
      onOverlayClick={onClose}
      color="grey"
    >
      <Popover.Header>
        <div className={classes.warning}>
          <span className={classes.icon}>
            <AlertIcon color="warning" />
          </span>
          {isDeleting
            ? `Deleting this content will permanently remove it from ${screensText}:`
            : `Saving these changes will overwrite content on ${screensText}:`}
        </div>
        <Hidden smDown>
          {isDeleting ? (
            <Button
              label="Delete Anyway"
              color="destructive"
              onClick={onDelete}
              testId={testId ? `${testId}-delete` : ''}
            />
          ) : (
            <Button
              label="Got it"
              onClick={onClose}
              testId={testId ? `${testId}-ok` : ''}
            />
          )}
        </Hidden>
      </Popover.Header>
      <Popover.Body>
        {devices.map(device => (
          <Popover.Item key={device.id}>{device.name}</Popover.Item>
        ))}
      </Popover.Body>
      <Hidden mdUp>
        <Popover.Footer>
          {isDeleting ? (
            <>
              <Button label="Cancel" onClick={onClose} />
              <Button
                label="Delete Anyway"
                color="destructive"
                onClick={onDelete}
              />
            </>
          ) : (
            <>
              <Spacer />
              <Button label="Got it" onClick={onClose} />
            </>
          )}
        </Popover.Footer>
      </Hidden>
    </Popover>
  );
};

export default withStyles(styles)(AffectedDevicesPopover);
