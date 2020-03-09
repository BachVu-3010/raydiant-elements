import { withTheme } from '@material-ui/core/styles';
import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import { Theme } from '../../theme';
import styles from './Logo.styles';

export interface LogoProps extends WithStyles<typeof styles> {
  theme: Theme;
  square?: boolean;
  width?: string | number;
}

export const Logo: React.SFC<LogoProps> = ({
  classes,
  theme,
  square = false,
  width,
}) => (
  <img
    key={square ? 'logo-square' : 'logo'}
    className={cn(classes.root, square && classes.square)}
    src={square ? theme.logo.squareSrc : theme.logo.src}
    style={{ width }}
  />
);

export default withStyles(styles)(withTheme(Logo));
