import React from 'react';
import classnames from 'classnames';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import Flex, { propTypes as flexPropTypes, defaultProps as flexDefaultProps } from './Flex';

const propTypes = {
  ...flexPropTypes,
};
const defaultProps = {
  ...flexDefaultProps,
  alignItems: 'stretch',
};

/**
 * A column to hold things.  
 * See [Flex](#flex) for property information.
 */
const Column = ({ classes, className, ...pass }) =>
  <Flex className={classnames(className, classes.root)} {...pass} />;
Column.propTypes = propTypes;
Column.defaultProps = defaultProps;

const styleSheet = createStyleSheet(() => ({
  root: {
    flexDirection: 'column',
  },
}));

export default withStyles(styleSheet)(Column);
