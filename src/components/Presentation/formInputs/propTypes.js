import PropTypes from 'prop-types';

const pathType = PropTypes.arrayOf(
  PropTypes.oneOfType([PropTypes.string, PropTypes.number])
);

export const propTypes = {
  label: PropTypes.string.isRequired,
  strings: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  hasError: PropTypes.bool,
  url: PropTypes.string, // Link inputs
  options: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, value: PropTypes.string })
  ),
  constraints: PropTypes.shape({
    min: PropTypes.number, // Number inputs
    max: PropTypes.number, // Number inputs
    maxlength: PropTypes.number, // String and text inputs
    'content-length': PropTypes.number, // File inputs
    'content-types': PropTypes.arrayOf(PropTypes.string), // File inputs
  }),
  helperText: PropTypes.node,
  optional: PropTypes.bool,
  onBlur: PropTypes.func,
  propPath: pathType, // Array inputs
  selectedPath: pathType, // Array inputs
  onAdd: PropTypes.func, // Array inputs
  onRemove: PropTypes.func, // Array inputs
  setSelectedPath: PropTypes.func, // Array inputs
};

export const defaultProps = {
  hasError: false,
  url: null,
  options: [],
  constraints: {},
  helperText: '',
  optional: false,
  propPath: [],
  onAdd: () => {},
  onRemove: () => {},
  setSelectedPath: () => {},
  onBlur: () => {},
};
