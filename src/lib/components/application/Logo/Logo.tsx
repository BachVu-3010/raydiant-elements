import { withTheme } from '@material-ui/core/styles';
import * as React from 'react';
import { Theme } from '../../../theme';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './Logo.styles';

export interface LogoProps extends WithStyles<typeof styles> {
  contrast?: boolean;
  theme: Theme;
}

export const Logo: React.SFC<LogoProps> = ({ contrast, classes, theme }) => (
  <img
    className={classes.root}
    src={contrast ? theme.logo.contrast : theme.logo.default}
  />
);

export default withStyles(styles)(withTheme()(Logo));
