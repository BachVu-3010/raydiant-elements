import * as React from 'react';
import { Theme } from '../theme';

interface AllThemes {
  light: Theme;
  lightGrey: Theme;
  grey: Theme;
  dark: Theme;
}

interface ThemeProviderProps {
  theme: AllThemes;
}

export const ThemeContext = React.createContext<ThemeProviderProps>(null);

const ThemeProvider: React.SFC<ThemeProviderProps> = ({ theme, children }) => (
  <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
);

export default ThemeProvider;
