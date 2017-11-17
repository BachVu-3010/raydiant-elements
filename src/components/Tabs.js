import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';

const propTypes = {
  /** Class name(s) */
  className: PropTypes.string,
  /** The children to layout as tabs */
  children: PropTypes.node.isRequired,
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  className: '',
};

const Tabs = ({ classes, className, children }) => (
  <div className={classnames(classes.tabs, className)}>{children}</div>
);

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

const styles = {
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    minHeight: 68,
  },
};

export default withStyles(styles)(Tabs);
