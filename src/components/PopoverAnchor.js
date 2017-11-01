import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const PopoverAnchor = ({ children }) => (
  <span style={{ position: 'relative' }}>{children}</span>
);

PopoverAnchor.propTypes = propTypes;

export default PopoverAnchor;
