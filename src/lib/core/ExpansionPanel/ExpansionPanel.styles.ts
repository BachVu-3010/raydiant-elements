import { Theme } from '../../theme';
import { createStyles } from '../withStyles';

const styles = (theme: Theme) =>
  createStyles({
    expansionPanel: {
      backgroundColor: theme.palette.background.default,                  
      '&:first-child': {        
        borderTopLeftRadius: theme.borderRadius.md,
        borderTopRightRadius: theme.borderRadius.md,        
      },
      '&:last-child': {        
        borderBottomLeftRadius: theme.borderRadius.md,
        borderBottomRightRadius: theme.borderRadius.md,
      },
    },
  });

export default styles;
