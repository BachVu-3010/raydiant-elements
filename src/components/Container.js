import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import stylePropType from 'react-style-proptype';

export const styles = theme => ({
  root: {
    ...theme.typography.body2,
    backgroundColor: theme.palette.background.default,
  },
});

const Container = ({ children, classes, className, style }) =>
  <div className={classnames(classes.root, className)} {...{ style }}>{children}</div>;
Container.propTypes = {
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType,
};
Container.defaultProps = {
  children: null,
  className: '',
  style: null,
};
export default withStyles(styles)(Container);
