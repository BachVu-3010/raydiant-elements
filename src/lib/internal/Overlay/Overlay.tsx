import Fade from '@material-ui/core/Fade';
import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './Overlay.styles';

export interface OverlayProps extends WithStyles<typeof styles> {
  className?: string;
  onClick?: () => any;
}

export const Overlay: React.SFC<OverlayProps> = ({
  className,
  onClick,
  children,
  classes,
}) => {
  const clickProps = {
    onClick,
    tabIndex: -1,
    role: 'button',
    style: { cursor: 'pointer' },
  };

  return (
    <Fade in>
      <div
        className={cn(classes.overlay, className)}
        {...(onClick ? clickProps : {})}
      >
        {children}
      </div>
    </Fade>
  );
};

export default withStyles(styles)(Overlay);