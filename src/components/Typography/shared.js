import PropTypes from 'prop-types';

export const styleSheet = theme => ({
  ...theme.typography,
});

const propTypes = {
  /** Child elements are used as the component's text. */
  children: PropTypes.node,
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired,
};
const defaultProps = {
  children: null,
};

export { propTypes, defaultProps };
