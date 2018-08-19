import { MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import { ThemeContext } from './ThemeProvider';

export type ThemeType = 'light' | 'grey' | 'dark';

interface ThemeProps {
  type: ThemeType;
  className?: string;
}

const Theme: React.SFC<ThemeProps> = ({ type = 'light', children }) => (
  <ThemeContext.Consumer>
    {theme => (
      <MuiThemeProvider theme={theme[type]}>{children}</MuiThemeProvider>
    )}
  </ThemeContext.Consumer>
);

export default Theme;
