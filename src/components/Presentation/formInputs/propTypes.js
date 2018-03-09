import PropTypes from 'prop-types';

const pathType = PropTypes.arrayOf(
  PropTypes.oneOfType([PropTypes.string, PropTypes.number])
);

// Presentation properties.
const propertiesType = PropTypes.arrayOf(PropTypes.object);

export const propTypes = {
  label: PropTypes.string.isRequired,
  strings: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  autoFocus: PropTypes.bool,
  hasError: PropTypes.bool,
  url: PropTypes.string, // Link
  options: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, value: PropTypes.string })
  ),
  constraints: PropTypes.shape({
    min: PropTypes.number, // Number
    max: PropTypes.number, // Number
    maxlength: PropTypes.number, // String and text
    'content-length': PropTypes.number, // File
    'content-types': PropTypes.arrayOf(PropTypes.string), // File
  }),
  helperText: PropTypes.node,
  optional: PropTypes.bool,
  onBlur: PropTypes.func,
  singularLabel: PropTypes.string, // Array
  propPath: pathType, // Array
  selectedPath: pathType, // Array
  onAdd: PropTypes.func, // Array
  onRemove: PropTypes.func, // Array
  properties: propertiesType, // Array
};

export const defaultProps = {
  autoFocus: false,
  hasError: false,
  options: [],
  constraints: {},
  helperText: '',
  optional: false,
  propPath: [],
  onAdd: () => {},
  onRemove: () => {},
  onBlur: () => {},
  properties: [],
};
