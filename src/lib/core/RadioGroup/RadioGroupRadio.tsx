import MUIRadio from '@material-ui/core/Radio';
import * as React from 'react';
import { testAttr } from '../../helpers';
import { Theme } from '../../theme';
import withStyles, { createStyles, WithStyles } from '../withStyles';

export interface RadioProps extends WithStyles<typeof styles> {
  testId?: string;
}

export const Radio: React.SFC<RadioProps> = ({ testId, classes, ...props }) => (
  <MUIRadio
    {...props}
    color="primary"
    classes={{ root: classes.root, colorPrimary: classes.colorPrimary }}
    inputProps={{ ...(testAttr(testId) as any) }}
  />
);

const styles = (theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(0.5),
      paddingRight: theme.spacing(1),
      paddingBottom: theme.spacing(0.5),
      paddingLeft: theme.spacing(2),
    },
    colorPrimary: {
      color: theme.palette.text.secondary,

      '&$checked': {
        color: theme.palette.primary.main,
      },
      '&$disabled': {
        color: theme.palette.primary.main,
        opacity: 0,
      },
    },
  });

export default withStyles(styles)(Radio);
