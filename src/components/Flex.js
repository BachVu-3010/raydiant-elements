import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classnames from 'classnames';
import { createStyleSheet, withStyles } from 'material-ui/styles';

const alignItemsValues = ['center', 'flex-start', 'flex-end', 'stretch'];
const justifyContentValues = [
  'center',
  'flex-start',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
];

const propTypes = {
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
  /** Grow child items to fill available space */
  growItems: PropTypes.bool,
  /** Child space distribution along main flex axis. */
  justifyContent: PropTypes.oneOf(justifyContentValues),
  /** Child space distribution along cross flex axis. */
  alignItems: PropTypes.oneOf(alignItemsValues),
  /** Provide space between the child elements. */
  noSpace: PropTypes.bool,
  /** Apply a style. */
  style: stylePropType,
};
const defaultProps = {
  alignItems: 'center',
  children: null,
  className: '',
  growItems: false,
  justifyContent: 'flex-start',
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
  growItems,
  justifyContent,
  noSpace,
  style,
}) =>
  <div
    style={style}
    className={classnames(
      classes.root,
      classes[`justifyContent-${justifyContent}`],
      classes[`alignItems-${alignItems}`],
      {
        [classes.space]: !noSpace,
        [classes.growItems]: growItems,
      },
      className,
    )}
  >
    {children}
  </div>;
Flex.propTypes = propTypes;
Flex.defaultProps = defaultProps;

const styleSheet = createStyleSheet(theme => {
  const alignItems = alignItemsValues.reduce(
    (acc, val) => ({
      ...acc,
      [`alignItems-${val}`]: { alignItems: val },
    }),
    {},
  );

  const justifyContent = justifyContentValues.reduce(
    (acc, val) => ({
      ...acc,
      [`justifyContent-${val}`]: { justifyContent: val },
    }),
    {},
  );

  return {
    root: {
      display: 'flex',
    },
    space: {
      '& > *': {
        margin: theme.spacing.unit,
      },
    },
    growItems: {
      '& > *': {
        flex: '1 auto',
      },
    },
    ...justifyContent,
    ...alignItems,
  };
});

export default withStyles(styleSheet)(Flex);
export { propTypes, defaultProps };
