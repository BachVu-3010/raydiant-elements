import * as React from 'react';
import { Theme } from '../../theme';

interface AllThemes {
  light: Theme;
  grey: Theme;
  dark: Theme;
}

interface ThemeProviderProps {
  theme: AllThemes;
}

export const ThemeContext = React.createContext<AllThemes>(null);

const ThemeProvider: React.SFC<ThemeProviderProps> = ({ theme, children }) => (
  // <MuiThemeProvider theme={theme.light}>{children}</MuiThemeProvider>
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

export default ThemeProvider;
