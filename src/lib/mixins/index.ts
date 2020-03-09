import { CSSProperties } from '@material-ui/core/styles/withStyles';
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
  outline: 'none',
});

export const textTruncate = (): React.CSSProperties => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const responsiveContainer = (theme: Theme): React.CSSProperties => ({
  width: '100%',
  padding: theme.spacing(4),

  [theme.breakpoints.down('xs')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
});

export const tabContainer = (theme: Theme): React.CSSProperties => ({
  display: 'flex',
  width: '100%',
  minHeight: 68,
  background: theme.palette.background.default,
});

export const scrollable = (): React.CSSProperties => ({
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch',
});

export const tab = (
  theme: Theme,
  opts: { border: boolean } = { border: false },
): React.CSSProperties => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: theme.typography.fontFamily,
  lineHeight: 1.33,
  padding: theme.spacing(1, 2),
  backgroundColor: 'transparent',
  border: 0,
  cursor: 'pointer',
  textDecoration: 'none',
  outline: 'none',
  ...(opts.border
    ? {
        borderTop: '3px solid transparent',
        borderBottom: '3px solid transparent',
      }
    : {}),
});

export const marginBetweenChildrenHorizontal = (
  margin: number | string,
): CSSProperties => ({
  '& > :not(:first-child)': {
    marginLeft: margin,
  },
  '& > :not(:last-child)': {
    marginRight: margin,
  },
});

export const marginBetweenChildrenVertical = (
  margin: number | string,
): CSSProperties => ({
  '& > :not(:first-child)': {
    marginTop: margin,
  },
  '& > :not(:last-child)': {
    marginBottom: margin,
  },
});
