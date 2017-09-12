import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Flex, {
  propTypes as flexPropTypes,
  defaultProps as flexDefaultProps,
} from './Flex';
import ThemeProvider from '../styles/ThemeProvider';

const propTypes = {
  ...flexPropTypes,
  /** @ignore */
  alignContent: flexPropTypes.alignContent,
  /** Border */
  border: PropTypes.oneOf(['top', 'bottom', 'all', 'none']),
  /** Border radius */
  borderRadius: PropTypes.oneOf(['top', 'bottom', 'all', 'none']),
  /** Color of the row. */
  color: PropTypes.oneOf(['default', 'global', 'primary', 'management']),
  /** The size and padding of the row */
  size: PropTypes.oneOf([
    'content',
    'tall',
    'tall-wide',
    'dynamic',
    'dynamic-padded',
    'dynamic-padded-dense',
  ]),
};
const defaultProps = {
  ...flexDefaultProps,
  alignContent: undefined,
  border: 'none',
  borderRadius: 'none',
  color: 'default',
  size: 'content',
};

/**
 * A row to hold things.  
 * See [Flex](#flex) for property information.
 */
const Row = ({
  alignContent,
  border,
  borderRadius,
  classes,
  className,
  color,
  size,
  ...rest
}) => {
  const flex = (
    <Flex
      alignContent={
        alignContent === undefined ? size === 'content' : alignContent
      }
      className={classnames(
        classes.root,
        classes[`color-${color}`],
        classes[`size-${size}`],
        classes[`border-${border}`],
        classes[`borderRadius-${borderRadius}`],
        className,
      )}
      {...rest}
    />
  );
  let theme;
  if (color === 'primary') {
    theme = 'light';
  } else if (color === 'management' || color === 'global') {
    theme = 'dark';
  }
  if (theme) {
    return <ThemeProvider theme={theme}>{flex}</ThemeProvider>;
  }
  return flex;
};
Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

const styles = theme => {
  const borderColor = theme.palette.text.divider;
  const border = `1px solid ${borderColor}`;
  const borderRadius = '4px';

  return {
    root: {
      flexDirection: 'row',
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
    'size-dynamic': {},
    'size-tall': { height: '68px', padding: `0 ${theme.spacing.unit}px` },
    'size-tall-wide': {
      height: '68px',
      padding: `0 ${theme.spacing.unit * 3}px`,
    },
    'size-dynamic-padded': { padding: `${theme.spacing.unit}px` },
    'size-dynamic-padded-dense': { padding: `0 ${theme.spacing.unit}px` },
  };
};

export default withStyles(styles)(Row);
