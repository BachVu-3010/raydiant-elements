import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Icon from './Icon';

const propTypes = {
  /** Class name(s) */
  className: PropTypes.string,
  /** Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes.string,
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  className: '',
  titleAccess: '',
};

/**
 * The SuccessIcon component wraps the Icon component with the default styling for showing
 * a successful action indicator
 */
const SuccessIcon = ({ className, titleAccess, classes }) => (
  <Icon
    className={classnames(className, classes.icon)}
    icon="checkmark"
    titleAccess={titleAccess}
  />
);

const styles = theme => ({
  icon: {
    fill: '#fff',
    backgroundColor: theme.palette.progress[500],
    borderRadius: 100,
  },
});

SuccessIcon.propTypes = propTypes;
SuccessIcon.defaultProps = defaultProps;

export default withStyles(styles)(SuccessIcon);
