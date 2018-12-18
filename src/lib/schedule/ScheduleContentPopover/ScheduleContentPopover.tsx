import * as React from 'react';
import Popover from '../../core/Popover';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import { Theme } from '../../theme';
import ScheduleContentPopoverItem from './ScheduleContentPopoverItem';

interface ScheduleContentPopoverProps extends WithStyles<typeof styles> {
  open: boolean;
  onClose: () => void;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: theme.spacing.unit * 44,
      display: 'flex',
      flexWrap: 'wrap',
    },
  });

export const ScheduleContentPopover: React.SFC<ScheduleContentPopoverProps> = ({
  open,
  onClose,
  children,
  classes,
}) => (
  <Popover
    anchor={['bottom', 'right']}
    to={['top', 'right']}
    open={open}
    onOverlayClick={onClose}
    width="auto"
    height="auto"
    color="light"
  >
    <div className={classes.root}>{children}</div>
  </Popover>
);

export default Object.assign(withStyles(styles)(ScheduleContentPopover), {
  Item: ScheduleContentPopoverItem,
});
