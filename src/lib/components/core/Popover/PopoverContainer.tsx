import * as React from 'react';

const PopoverContainer: React.SFC<{}> = ({ children }) => (
  <span style={{ position: 'relative', display: 'inline-block' }}>
    {children}
  </span>
);

export default PopoverContainer;
