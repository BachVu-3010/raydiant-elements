import * as React from 'react';
import { Theme } from '../theme';

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
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  width: '100%',
  minHeight: 68,
});

export const tab = (theme: Theme): React.CSSProperties => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: theme.typography.fontFamily,
  lineHeight: 1.33,
  padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  backgroundColor: 'transparent',
  borderTop: '3px solid transparent',
  borderBottom: '3px solid transparent',
  borderLeft: 0,
  borderRight: 0,
  cursor: 'pointer',
  textDecoration: 'none',
});
