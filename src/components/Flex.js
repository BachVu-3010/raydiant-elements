import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';

const alignItemsValues = ['', 'center', 'flex-start', 'flex-end', 'stretch'];
const justifyContentValues = [
  '',
  'center',
  'flex-start',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
  'stretch',
];

const propTypes = {
  /**
   * Align the Flex's content with outside content.
   *
   * A negative margin will be applied to the Flex element to account for the space
   * between child elements, so child elements will be horizonatally/vertically aligned
   * with content outside the Flex.
   *
   * This is useful to keep content in nested Flexes (e.g., <Column><Row>...</Row><Column>)
   * from getting indented too far.
   */
  alignContent: PropTypes.bool,
  /** Child space distribution along cross flex axis. */
  alignItems: PropTypes.oneOf(alignItemsValues),
  /**
   * Child elements are used as the content.
   * For spacing to be correct, `children` must be one or more elements
   * (e.g., `<Flex><span>some content</span></Flex>`)
   * rather than plain text (e.g., `<Flex>some content</Flex>`).
   *
   * Assign flex layout CSS (`flex`, `flex-grow`, `flex-shrink`, and `flex-basis`)
   * to the children to customize the layout.
   */
  children: PropTypes.node,
  /** Apply a class. */
  className: PropTypes.string,
  /** Child space distribution along main flex axis. */
  justifyContent: PropTypes.oneOf(justifyContentValues),
  /** Provide space between the child elements. */
  noSpace: PropTypes.bool,
  /** Apply a style. */
  style: stylePropType,
};
const defaultProps = {
  alignContent: true,
  alignItems: '',
  children: null,
  className: '',
  justifyContent: '',
  noSpace: false,
  style: null,
};

/**
 * A container to hold things.
 * You probably want to use one of [Row](#row) or [Column](#column)
 * rather than using `Flex` directly.
 */
const Flex = ({
  alignItems,
  children,
  classes,
  className,
  alignContent,
  justifyContent,
  noSpace,
  style,
  ...rest
}) => (
  <div
    style={style}
    className={classnames(
      classes.root,
      justifyContent ? classes[`justifyContent-${justifyContent}`] : null,
      alignItems ? classes[`alignItems-${alignItems}`] : null,
      {
        [classes.space]: !noSpace,
        [classes.alignContent]: alignContent,
      },
      className
    )}
    {...rest}
  >
    {children}
  </div>
);
Flex.propTypes = propTypes;
Flex.defaultProps = defaultProps;

const styles = theme => {
  const alignItems = alignItemsValues.reduce(
    (acc, val) => ({
      ...acc,
      [`alignItems-${val}`]: { alignItems: val },
    }),
    {}
  );

  const justifyContent = justifyContentValues.reduce(
    (acc, val) => ({
      ...acc,
      [`justifyContent-${val}`]: { justifyContent: val },
    }),
    {}
  );

  return {
    root: {
      display: 'flex',
    },
    space: {
      // Surround all children with a margin of 1/2 the desired space
      // between elements.
      '& > *': {
        margin: theme.spacing.unit,
      },
      // If we're aligning our content with the outside world, apply
      // a negative margin to ourselves to make up for the positive
      // margin we're applying to our children.
      '&$alignContent': {
        margin: -theme.spacing.unit,
        // For nested flex containers with negative margin applied,
        // we want both the +ve margin and -ve margin applied...
        // which nets out to 0.
        '& > &$alignContent': {
          margin: 0,
        },
      },
    },
    alignContent: {},
    ...justifyContent,
    ...alignItems,
  };
};

export default withStyles(styles)(Flex);
export { propTypes, defaultProps };
