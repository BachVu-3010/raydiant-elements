import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createStyleSheet, withStyles } from 'material-ui/styles';

const alignItemsValues = ['center', 'flex-start', 'flex-end'];
const justifyContentValues = [
  ...alignItemsValues,
  'space-between',
  'space-around',
  'space-evenly',
];

const propTypes = {
  /** Border */
  border: PropTypes.oneOf(['top', 'bottom', 'all', 'none']),
  /** Border radius */
  borderRadius: PropTypes.oneOf(['top', 'bottom', 'all', 'none']),
  /** Child elements are used as the button text. */
  children: PropTypes.node,
  /** Color of the row. */
  color: PropTypes.oneOf(['default', 'global', 'primary', 'management']),
  /** Child space distribution along main flex axis */
  justifyContent: PropTypes.oneOf(justifyContentValues),
  /** Child space distribution along cross flex axis */
  alignItems: PropTypes.oneOf(alignItemsValues),
  /** The size and padding of the row */
  size: PropTypes.oneOf([
    'tall',
    'tall-padded',
    'dynamic',
    'dynamic-padded',
    'dynamic-padded-dense',
  ]),
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired,
};
const defaultProps = {
  border: 'none',
  borderRadius: 'none',
  children: null,
  color: 'default',
  justifyContent: 'flex-start',
  alignItems: 'center',
  size: 'dynamic',
};

/**
 * A row to hold things.
 */
const Row = ({
  border,
  borderRadius,
  children,
  classes,
  color,
  justifyContent,
  alignItems,
  size,
}) =>
  <div
    className={classnames(
      classes.root,
      classes[`color-${color}`],
      classes[`size-${size}`],
      classes[`border-${border}`],
      classes[`borderRadius-${borderRadius}`],
      classes[`justifyContent-${justifyContent}`],
      classes[`alignItems-${alignItems}`],
    )}
  >
    {children}
  </div>;
Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

const styleSheet = createStyleSheet(theme => {
  const borderColor = theme.palette.text.divider;
  const border = `1px solid ${borderColor}`;
  const borderRadius = '4px';

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
      verticalAlign: 'middle',
      '& > *': {
        marginLeft: theme.spacing.unit * 2,
      },
      '& > *:first-child': {
        marginLeft: 0,
      },
    },
    'border-none': {},
    'border-top': { borderTop: border },
    'border-bottom': { borderBottom: border },
    'border-all': { border },
    'borderRadius-none': {},
    'borderRadius-top': { borderRadius: `${borderRadius} ${borderRadius} 0 0` },
    'borderRadius-bottom': {
      borderRadius: `0 0 ${borderRadius} ${borderRadius}`,
    },
    'borderRadius-all': { borderRadius },
    'color-default': {},
    'color-global': {
      backgroundColor: theme.palette.primary[500],
      color: theme.palette.getContrastText(theme.palette.primary[500]),
    },
    'color-management': {
      backgroundColor: theme.palette.primary[800],
      color: theme.palette.getContrastText(theme.palette.primary[800]),
    },
    'color-primary': {
      backgroundColor: 'white',
      color: theme.palette.getContrastText('white'),
    },
    ...justifyContent,
    ...alignItems,
    'size-dynamic': {},
    'size-tall': { height: '68px', padding: '0 16px' },
    'size-tall-wide': { height: '68px', padding: '0 32px' },
    'size-dynamic-padded': { padding: '16px' },
    'size-dynamic-padded-dense': { padding: '8px 16px' },
  };
});

export default withStyles(styleSheet)(Row);
