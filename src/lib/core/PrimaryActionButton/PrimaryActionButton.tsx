import Fab from '@material-ui/core/Fab';
import * as cn from 'classnames';
import * as React from 'react';
import Icon, { IconOptions } from '../Icon';
import withStyles, { WithStyles } from '../withStyles';
import styles from './PrimaryActionButton.styles';

interface ButtonProps extends WithStyles<typeof styles> {
  icon: IconOptions;
  label?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: 'default' | 'primary' | 'progress' | 'destructive';
  onClick?: (event: React.MouseEvent<any>) => any;
}

export const PrimaryActionButton: React.SFC<ButtonProps> = ({
  icon,
  label,
  size = 'medium',
  color = 'default',
  onClick,
  classes,
}) => {
  return (
    <label className={classes.root} onClick={onClick}>
      <Fab
        size={size}
        className={cn(
          color === 'default' && classes.default,
          color === 'primary' && classes.primary,
          color === 'destructive' && classes.destructive,
          color === 'progress' && classes.progress,
        )}
      >
        <Icon icon={icon} />
      </Fab>
      {label && <div className={classes.label}>{label}</div>}
    </label>
  );
};

export default withStyles(styles)(PrimaryActionButton);
