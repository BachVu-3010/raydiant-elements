import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const propTypes = {
  /** Class name(s) */
  className: PropTypes.string,
  /** Opens the popover when true */
  open: PropTypes.bool,
  /** The corner of the popover to use for positioning */
  anchor: PropTypes.string,
  /** The corner of the container to fix the anchor to */
  to: PropTypes.string,
  /** Called when the user clicks the overlay  */
  onOverlayClick: PropTypes.func,
  /** The popover contents */
  children: PropTypes.node.isRequired,
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  className: '',
  open: false,
  anchor: 'top left',
  to: 'bottom left',
  onOverlayClick: undefined,
};

const getPoint = str => {
  const point = str.split(' ');
  point[0] = point[0] || 'top';
  point[1] = point[1] || 'left';
  return point;
};

// translation map for each combination of anchor and to points
//  ie: translateMap[anchorPtY][anchorPtX][toPtY][toPtX]
const translateMap = {
  top: {
    left: {
      top: {
        left: [0, 0],
        right: [100, 0],
      },
      bottom: {
        left: [0, 100],
        right: [100, 100],
      },
    },
    right: {
      top: {
        left: [-100, 0],
        right: [0, 0],
      },
      bottom: {
        left: [-100, 100],
        right: [0, 100],
      },
    },
  },
  bottom: {
    left: {
      top: {
        left: [0, -100],
        right: [100, -100],
      },
      bottom: {
        left: [0, 0],
        right: [100, 0],
      },
    },
    right: {
      top: {
        left: [-100, -100],
        right: [0, -100],
      },
      bottom: {
        left: [-100, 0],
        right: [0, 0],
      },
    },
  },
};

const Popover = ({
  classes,
  className,
  open,
  anchor,
  to,
  onOverlayClick,
  children,
}) => {
  if (!open) return null;
  const anchorPt = getPoint(anchor);
  const toPt = getPoint(to);
  const translate = translateMap[anchorPt[0]][anchorPt[1]][toPt[0]][toPt[1]];
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
        className={classnames(className, classes.popover)}
        style={{
          [toPt[0]]: -2, // should have a 2px buffer
          [toPt[1]]: 0,
          transform: `translate(${translate[0]}%, ${translate[1]}%)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

const styles = () => ({
  overlay: {
    position: 'fixed',
    zIndex: 100,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popover: {
    position: 'absolute',
    zIndex: 110,
    borderRadius: 2,
    backgroundColor: '#fff',
    boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.29)',
  },
});

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

export default withStyles(styles)(Popover);
