import * as React from 'react';

const Anchor: React.SFC<{}> = ({ children }) => (
  <span style={{ position: 'relative', display: 'inline-block' }}>
    {children}
  </span>
);

export default Anchor;
