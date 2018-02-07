import React from 'react';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { propTypes, defaultProps } from './shared';
import Note from './Note';

const HelperText = ({ classes, className, children }) => (
  <Note className={classnames(classes.helperText, className)}>{children}</Note>
);
HelperText.propTypes = propTypes;
HelperText.defaultProps = defaultProps;

const styles = {
  helperText: {
    display: 'block',
    minHeight: '1em',
  },
};

export default withStyles(styles)(HelperText);
