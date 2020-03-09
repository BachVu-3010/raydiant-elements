import * as React from 'react';
import Icon, { IconOptions } from '../../core/Icon';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import { buttonReset } from '../../mixins';
import { Theme } from '../../theme';

export interface ScheduleContentPopoverItemProps
  extends WithStyles<typeof styles> {
  icon: IconOptions;
  label: string;
  description?: string;
  onClick: () => void;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...buttonReset(),
      width: theme.spacing(22),
      height: theme.spacing(15.875),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderTop: `1px solid ${theme.button.border}`,
      borderRight: `1px solid ${theme.button.border}`,
      borderBottom: `1px solid transparent`,
      borderLeft: `1px solid transparent`,
      cursor: 'pointer',

      '&:nth-child(-n+2)': {
        borderTop: `1px solid transparent`,
      },
      '&:nth-child(2n)': {
        borderRight: `1px solid transparent`,
      },
    },

    icon: {
      marginBottom: theme.spacing(1),
    },

    label: {
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,
      color: theme.palette.text.primary,
    },

    description: {
      fontSize: theme.fontSizes.xs,
      color: theme.palette.text.secondary,
    },
  });

export const ScheduleContentPopoverItem: React.SFC<
  ScheduleContentPopoverItemProps
> = ({ icon, label, description, classes, onClick }) => (
  <button className={classes.root} onClick={onClick}>
    {icon && <Icon icon={icon} className={classes.icon} />}{' '}
    <div className={classes.label}>{label}</div>
    <div className={classes.description}>{description || <>&nbsp;</>}</div>
  </button>
);

export default withStyles(styles)(ScheduleContentPopoverItem);
