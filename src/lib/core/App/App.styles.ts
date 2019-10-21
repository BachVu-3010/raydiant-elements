import { createStyles } from '../../core/withStyles';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    '@global': {
      html: {
        fontSize: theme.typography.fontSize,
      },
      body: {
        fontFamily: theme.typography.fontFamily,
      },
    },
    // Casting to `any` because the createStyles type doesn't support arrays but in actually does
    '@font-face': theme.fontFaces as any,
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
    },
  });

export default styles;
