import * as React from 'react';
import Media from 'react-media';
import Popover, { XPosition, YPosition } from '../../core/Popover';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import { Theme } from '../../theme';
import AddDevice, { AddDeviceMinHeight, AddDeviceProps } from '../AddDevice';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
  });

interface AddDevicePopoverProps
  extends AddDeviceProps,
    WithStyles<typeof styles> {
  open?: boolean;
  onClose: () => void;
  headingText: string;
  testId?: string;
  hideAudioOnly?: boolean;
}

export const AddDevicePopover: React.SFC<AddDevicePopoverProps> = ({
  open,
  headingText,
  onClose,
  onRegister,
  error,
  classes,
  testId,
  hideAudioOnly,
}) => {
  const popoverProps = {
    open,
    anchor: ['top', 'right'] as [YPosition, XPosition],
    to: ['bottom', 'right'] as [YPosition, XPosition],
    onOverlayClick: onClose,
  };

  const contents = (
    <div className={classes.root}>
      <AddDevice
        headingText={headingText}
        onRegister={onRegister}
        error={error}
        testId={testId}
        hideAudioOnly={hideAudioOnly}
      />
    </div>
  );

  return (
    <Media query={`(min-height: ${AddDeviceMinHeight}px)`}>
      {matches =>
        matches ? (
          <Popover {...popoverProps} height="auto">
            {contents}
          </Popover>
        ) : (
          <Popover {...popoverProps} width="auto" height="auto">
            {contents}
          </Popover>
        )
      }
    </Media>
  );
};

export default withStyles(styles)(AddDevicePopover);
