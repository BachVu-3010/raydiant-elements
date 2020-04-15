import MUIToggleButton from '@material-ui/lab/ToggleButton';
import * as React from 'react';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import Icon from '../Icon';
import { IconOptions } from '../Icon/Icon';

export interface ToggleButtonGroupButtonProps
  extends WithStyles<typeof styles> {
  value: string;
  icon?: React.ReactNode | IconOptions;
  disabled?: boolean;
}

export const ToggleButtonGroupButton: React.FunctionComponent<
  ToggleButtonGroupButtonProps
> = props => {
  const { value, children, icon, disabled } = props;
  const iconElement =
    typeof icon === 'string' ? <Icon icon={icon as IconOptions} /> : icon;

  return (
    <MUIToggleButton {...props} value={value} disabled={disabled}>
      {icon ? iconElement : children}
    </MUIToggleButton>
  );
};

const styles = () =>
  createStyles({
    root: {
      flexGrow: 1,
      flexBasis: 0,
      minWidth: 40,
      textTransform: 'none',
    },
  });

export default withStyles(styles)(ToggleButtonGroupButton);
