import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress as MUICircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';

const propTypes = {
  /** Class name(s) */
  className: PropTypes.string,
  /** Style of the progress. */
  color: PropTypes.oneOf(['primary', 'progress', 'destructive']),
  /** The size of the circle. */
  size: PropTypes.number,
  /* The mode of show your progress. Indeterminate for when there is no value for progress. 
  Determinate for controlled progress value. */
  mode: PropTypes.oneOf(['determinate', 'indeterminate']),
  /** The max value of progress in determinate mode. */
  max: PropTypes.number,
  /** The min value of progress in determinate mode. */
  min: PropTypes.number,
  /** The value of progress in determinate mode. */
  value: PropTypes.number,
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  className: '',
  color: 'primary',
  size: 40,
  mode: 'indeterminate',
  max: 100,
  min: 0,
  value: 0,
};

const CircularProgress = ({
  className,
  color,
  size,
  mode,
  max,
  min,
  value,
  classes,
}) => (
  <MUICircularProgress
    className={classnames(className, classes[color])}
    {...{ size, mode, max, min, value }}
  />
);

const styles = theme => ({
  primary: {
    color: theme.palette.primary[500],
  },
  progress: {
    color: theme.palette.progress[500],
  },
  destructive: {
    color: theme.palette.destructive[500],
  },
});

CircularProgress.propTypes = propTypes;
CircularProgress.defaultProps = defaultProps;

export default withStyles(styles)(CircularProgress);
