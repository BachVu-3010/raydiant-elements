import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      background: theme.collapsableSelect.background,
      border: `1px solid ${theme.collapsableSelect.border}`,
      borderRadius: theme.borderRadius.sm,
      margin: 0,
      marginBottom: theme.spacing(0.25),

      '&$expanded': {
        margin: 0,
        marginBottom: theme.spacing(0.25),
      },

      '&$focused': {
        background: theme.collapsableSelect.background,
      },
    },

    expanded: {
      '& $expandedIcon': {
        transform: 'rotate(90deg)',
      },
    },

    expandedIcon: {
      padding: theme.spacing(0.5, 1.5),
    },

    summary: {
      padding: theme.spacing(0, 1),
      minHeight: 0,

      '&$expanded': {
        minHeight: 0,
      },
    },

    content: {
      padding: theme.spacing(0.5, 0),
      margin: 0,

      '&$expanded': {
        margin: 0,
      },
    },

    label: {
      color: theme.palette.text.headingSecondary,
      fontSize: theme.fontSizes.xl,
      paddingLeft: theme.spacing(1),
    },

    details: {
      fontSize: theme.fontSizes.sm,
      color: theme.palette.text.secondary,
      padding: theme.spacing(2),
      paddingBottom: theme.spacing(4),
      paddingLeft: 43, // Aligns with summary content.
      paddingRight: 43,
      lineHeight: 1.08,
      letterPpacing: 0.08,
    },

    focused: {},
  }),
);
