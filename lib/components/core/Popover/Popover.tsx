import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Popover.styles';
import translations, { XPosition, YPosition } from './translations';

export interface PopoverProps extends WithStyles<typeof styles> {
  /** Opens the popover when true */
  open: boolean;
  /** The corner of the popover to use for positioning */
  anchor: [YPosition, XPosition];
  /** The corner of the container to fix the anchor to */
  to: [YPosition, XPosition];
  /** Called when the user clicks the overlay  */
  onOverlayClick: () => any;
  /** The popover contents */
  children: React.ReactNode;
}

export const Popover: React.SFC<PopoverProps> = ({
  classes,
  open = false,
  anchor = ['top', 'left'],
  to = ['bottom', 'left'],
  onOverlayClick,
  children,
}) => {
  if (!open) return null;

  const anchorY = anchor[0] as YPosition;
  const anchorX = anchor[1] as XPosition;
  const toY = to[0] as YPosition;
  const toX = to[1] as XPosition;
  const translate = translations[anchorY][anchorX][toY][toX];
  const clickProps = {
    onClick: onOverlayClick,
    tabIndex: -1,
    role: 'button',
    style: { cursor: 'pointer' },
  };

  return (
    <div>
      <div
        className={classes.overlay}
        {...(onOverlayClick ? clickProps : {})}
      />
      <div
        className={classes.popover}
        style={{
          [toY]: -2, // should have a 2px buffer
          [toX]: 0,
          transform: `translate(${translate[0]}%, ${translate[1]}%)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default withStyles(styles)(Popover);
