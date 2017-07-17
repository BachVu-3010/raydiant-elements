import React from 'react';
import PropTypes from 'prop-types';

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */

const propTypes = {
  /** Description of prop "foo". */
  foo: PropTypes.number.isRequired,
  /** A number representing the bars */
  bar: PropTypes.string.isRequired,
};

const Test = ({ foo, bar }) =>
  <div>
    {foo} {bar}
  </div>;

Test.propTypes = propTypes;
export default Test;
