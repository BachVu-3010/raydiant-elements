import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Icon from './Icon';

const propTypes = {
  /** Class name(s) */
  className: PropTypes.string,
  /** Style of the icon. */
  color: PropTypes.oneOf(['default', 'soft', 'white']),
  /** Provides a human-readable title for the element that contains it. 
   * https://www.w3.org/TR/SVG-access/#Equivalent 
   */
  titleAccess: PropTypes.string,
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  className: '',
  color: 'default',
  titleAccess: '',
};

/**
 * The AlertIcon component wraps the Icon component with the default styling for 
 * various alert types.
 */
const AlertIcon = ({ className, color, titleAccess, classes }) => (
  <Icon
    className={classnames(className, classes.icon, classes[color])}
    icon="alert"
    titleAccess={titleAccess}
  />
);

const styles = theme => ({
  icon: {
    boxSizing: 'border-box',
    borderRadius: 100,
  },
  default: {
    fill: '#fff',
    backgroundColor: theme.palette.destructive[500],
  },
  soft: {
    fill: '#fff',
    backgroundColor: theme.palette.warning[500],
  },
  white: {
    fill: '#20202a',
    backgroundColor: '#fff',
    border: '2px solid #20202a',
  },
});

AlertIcon.propTypes = propTypes;
AlertIcon.defaultProps = defaultProps;

export default withStyles(styles)(AlertIcon);
