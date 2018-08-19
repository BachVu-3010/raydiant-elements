import * as React from 'react';

const Container: React.SFC<{}> = ({ children }) => (
  <span style={{ position: 'relative' }}>{children}</span>
);

export default Container;
