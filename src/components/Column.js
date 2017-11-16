import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Flex, {
  propTypes as flexPropTypes,
  defaultProps as flexDefaultProps,
} from './Flex';

const propTypes = {
  ...flexPropTypes,
  /** @ignore */
  alignContent: flexPropTypes.alignContent,
  /** @ignore */
  alignItems: flexPropTypes.alignItems,
  /** The size and padding of the column. */
  size: PropTypes.oneOf([
    /** Align children to align with outside elements and grow to contain all children. */
    'content',
    /** Grow to contain all children. */
    'dynamic',
  ]),
};
const defaultProps = {
  ...flexDefaultProps,
  alignContent: undefined,
  alignItems: 'stretch',
  size: 'content',
};

/**
 * A column to hold things.
 * See [Flex](#flex) for property information.
 */
const Column = ({ alignContent, classes, className, size, ...pass }) => (
  <Flex
    alignContent={
      alignContent === undefined ? size === 'content' : alignContent
    }
    className={classnames(className, classes.root)}
    {...pass}
  />
);
Column.propTypes = propTypes;
Column.defaultProps = defaultProps;

const styles = {
  root: {
    flexDirection: 'column',
  },
};

export default withStyles(styles)(Column);
