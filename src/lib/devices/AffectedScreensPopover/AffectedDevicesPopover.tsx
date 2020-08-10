import ErrorIcon from '@material-ui/icons/Error';
import * as React from 'react';
import Button from '../../core/Button';
import Popover from '../../core/Popover';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import Hidden from '../../layout/Hidden';
import Spacer from '../../layout/Spacer';
import Row from '../../layout/Row';
import Text from '../../typography/Text';
import { Theme } from '../../theme';
import * as D from '../DeviceTypes';

interface AffectedDevicesPopoverProps extends WithStyles<typeof styles> {
  devices: D.AffectedDevice[];
  open: boolean;
  onClose: () => void;
  testId?: string;
}

const styles = (theme: Theme) =>
  createStyles({
    warning: {
      display: 'flex',
      fontSize: theme.fontSizes.sm,
      marginRight: theme.spacing(1),
      lineHeight: 1.5,
    },
    icon: {
      color: theme.palette.warning.main,
      backgroundColor: theme.palette.primary.main,
      borderRadius: 100,
    },
  });

export const AffectedDevicesPopover: React.SFC<AffectedDevicesPopoverProps> = ({
  devices = [],
  open,
  onClose,
  testId,
  classes,
}) => {
  const screensText = devices.length === 1 ? 'this screen' : 'these screens';
  return (
    <Popover
      anchor={['bottom', 'left']}
      to={['top', 'left']}
      open={open}
      onOverlayClick={onClose}
    >
      <Popover.Header>
        <Row halfMargin>
          <ErrorIcon className={classes.icon} />
          <Text small>
            Saving these changes will overwrite content on {screensText}
          </Text>
          <Hidden smDown>
            <Button
              label="Got it"
              onClick={onClose}
              testId={testId ? `${testId}-ok` : ''}
            />
          </Hidden>
        </Row>
      </Popover.Header>
      <Popover.Body>
        {devices.map(device => (
          <Popover.Item key={device.id}>{device.name}</Popover.Item>
        ))}
      </Popover.Body>
      <Hidden mdUp>
        <Popover.Footer>
          <Spacer />
          <Button
            label="Got it"
            onClick={onClose}
            testId={testId ? `${testId}-ok` : ''}
          />
        </Popover.Footer>
      </Hidden>
    </Popover>
  );
};

export default withStyles(styles)(AffectedDevicesPopover);
