import PropTypes from 'prop-types';

export const styleSheet = theme => ({
  ...theme.typography,
});

const propTypes = {
  /** Class name(s) */
  className: PropTypes.string,
  /** Child elements are used as the component's text. */
  children: PropTypes.node,
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired,
};
const defaultProps = {
  className: '',
  children: null,
};

export { propTypes, defaultProps };
