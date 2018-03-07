import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import buttonReset from '../styles/buttonReset';

const propTypes = {
  /** Class name(s) */
  className: PropTypes.string,
  /** Text of the breadcrumb */
  label: PropTypes.node,
  /** Child elements are used as the breadcrumb text if label is not provided. */
  children: PropTypes.node,
  /** Called when the user clicks the breadcrumb */
  onClick: PropTypes.func.isRequired,
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  className: '',
  label: null,
  children: null,
};

const Breadcrumb = ({ className, label, onClick, classes, children }) => (
  <button
    className={classnames(classes.breadcrumb, className)}
    onClick={onClick}
  >
    {label || children}
  </button>
);

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;

const styles = {
  breadcrumb: {
    ...buttonReset,
    height: '100%',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

export default withStyles(styles)(Breadcrumb);
