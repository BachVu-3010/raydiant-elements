import React from 'react';
import PropTypes from 'prop-types';
import MUISvgIcon from 'material-ui/SvgIcon';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';

const propTypes = {
  /** Class name(s) */
  className: PropTypes.string,
  /** Elements passed into the SVG Icon. 
   * Most likely a path, ie. <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /> 
   */
  children: PropTypes.node.isRequired,
  /** Provides a human-readable title for the element that contains it. 
   * https://www.w3.org/TR/SVG-access/#Equivalent 
   */
  titleAccess: PropTypes.string,
  /** Allows you to redefine what the coordinates without units mean inside an svg element. 
   * For example, if the SVG element is 500 (width) by 200 (height), and you pass 
   * viewBox="0 0 50 20", this means that the coordinates inside the svg will go from the 
   * top left corner (0,0) to bottom right (50,20) and each unit will be worth 10px. */
  viewBox: PropTypes.string,
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  className: '',
  titleAccess: '',
  viewBox: '0 0 20 20',
};

/**
 * The SvgIcon component is the base component that renders icon. It takes an SVG path 
 * element as its child and converts it to a React component that displays the path, 
 * and allows the icon to be styled and respond to mouse events. 
 * It can be used to create icons that are not part of the default Icon library
 */
const SvgIcon = ({ className, children, titleAccess, viewBox, classes }) => (
  <MUISvgIcon
    className={classnames(classes.root, className)}
    viewBox={viewBox}
    titleAccess={titleAccess}
  >
    {children}
  </MUISvgIcon>
);

const styles = () => ({
  root: {
    width: '20px',
    height: '20px',
  },
});

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = defaultProps;

export default withStyles(styles)(SvgIcon);
