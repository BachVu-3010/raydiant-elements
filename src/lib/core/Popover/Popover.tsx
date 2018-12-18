import * as cn from 'classnames';
import * as React from 'react';
import Overlay from '../../internal/Overlay';
import Hidden from '../../layout/Hidden';
import withStyles, { WithStyles } from '../withStyles';
import withThemeSelector from '../withThemeSelector';
import Anchor from './Anchor';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Item from './Item';
import styles from './Popover.styles';
import PopoverPortal from './PopoverPortal';
import translations, { XPosition, YPosition } from './translations';

export interface PopoverProps extends WithStyles<typeof styles> {
  /** Opens the popover when true */
  open: boolean;
  /** The corner of the popover to use for positioning */
  anchor: [YPosition, XPosition];
  /** The corner of the container to fix the anchor to */
  to: [YPosition, XPosition];
  width?: 'auto';
  height?: 'auto';
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
  width,
  height,
  onOverlayClick,
  children,
}) => {
  if (!open) return null;

  const anchorY = anchor[0] as YPosition;
  const anchorX = anchor[1] as XPosition;
  const toY = to[0] as YPosition;
  const toX = to[1] as XPosition;
  const translate = translations[anchorY][anchorX][toY][toX];

  const className = cn(
    classes.popover,
    width === 'auto' && classes.autoWidth,
    height === 'auto' && classes.autoHeight,
  );

  return (
    <>
      <PopoverPortal>
        <Hidden mdUp>
          <div className={classes.popoverContainer}>
            <Overlay onClick={onOverlayClick} />
            <div className={className}>{children}</div>
          </div>
        </Hidden>
      </PopoverPortal>
      <Hidden smDown>
        <Overlay className={classes.overlay} onClick={onOverlayClick} />
        <div
          className={className}
          style={{
            [toY]: -2, // should have a 2px buffer
            [toX]: 0,
            transform: `translate(${translate[0]}%, ${translate[1]}%)`,
            width,
          }}
        >
          {children}
        </div>
      </Hidden>
    </>
  );
};

export default Object.assign(withThemeSelector(withStyles(styles)(Popover)), {
  Anchor,
  Item,
  Header,
  Body,
  Footer,
});
