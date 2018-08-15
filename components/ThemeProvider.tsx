import { MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import { Theme } from '../theme';

interface ThemeProviderProps {
  theme: Theme;
}

const ThemeProvider: React.SFC<ThemeProviderProps> = ({ theme, children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export default ThemeProvider;
