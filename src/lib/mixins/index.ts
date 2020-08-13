import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { Theme } from '../theme';

export const buttonReset = (): CSSProperties => ({
  fontSize: 'inherit',
  fontFamily: 'inherit',
  color: 'inherit',
  textAlign: 'left',
  padding: 0,
  margin: 0,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
});

export const textTruncate = (): CSSProperties => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const responsiveContainer = (theme: Theme): CSSProperties => ({
  width: '100%',
  padding: theme.spacing(4),

  [theme.breakpoints.down('xs')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
});

export const tabContainer = (theme: Theme): CSSProperties => ({
  display: 'flex',
  width: '100%',
  minHeight: 68,
  background: theme.palette.background.default,
});

export const scrollable = (): CSSProperties => ({
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch',
});

export const tab = (
  theme: Theme,
  opts: { border: boolean } = { border: false },
): CSSProperties => ({
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
    marginTop: 0,
  },
  '& > :not(:last-child)': {
    marginRight: margin,
    marginBottom: 0,
  },
});

export const marginBetweenChildrenVertical = (
  margin: number | string,
): CSSProperties => ({
  '& > :not(:first-child)': {
    marginTop: margin,
    marginLeft: 0,
  },
  '& > :not(:last-child)': {
    marginBottom: margin,
    marginRight: 0,
  },
});
