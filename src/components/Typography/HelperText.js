import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { propTypes, defaultProps } from './shared';
import Note from './Note';

const HelperText = ({ classes, error, className, children }) => (
  <Note
    className={classnames(
      classes.helperText,
      className,
      error && classes.error
    )}
  >
    {children}
  </Note>
);
HelperText.propTypes = {
  ...propTypes,
  error: PropTypes.bool,
};
HelperText.defaultProps = {
  ...defaultProps,
  error: false,
};

const styles = theme => ({
  helperText: {
    display: 'block',
    minHeight: '1em',
    fontSize: 12,
  },
  error: {
    color: theme.palette.destructive ? theme.palette.destructive[500] : '',
  },
});

export default withStyles(styles)(HelperText);
