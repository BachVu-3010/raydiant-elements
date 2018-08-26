import * as React from 'react';

export const buttonReset = (): React.CSSProperties => ({
  fontSize: 'inherit',
  color: 'inherit',
  textAlign: 'left',
  padding: 0,
  margin: 0,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
});

export const tabContainer = (): React.CSSProperties => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  minHeight: 68,
});
