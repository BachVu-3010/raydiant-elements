import { Theme } from '../../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize,
      fontWeight: 500,
      lineHeight: 1.33,
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
      color: theme.tab.default.foreground,
      backgroundColor: 'transparent',
      borderBottom: '3px solid transparent',
      borderTop: 0,
      borderRight: 0,
      borderLeft: 0,
      cursor: 'pointer',
      textDecoration: 'none',
    },
    active: {
      borderBottom: `3px solid ${theme.tab.default.border}`,
    },
    icon: {
      margin: `${theme.spacing.unit}px auto`,
    },
  });

export default styles;
