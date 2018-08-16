import * as React from 'react';

const PopoverAnchor: React.SFC<{}> = ({ children }) => (
  <span style={{ position: 'relative' }}>{children}</span>
);

export default PopoverAnchor;
