import * as React from 'react';
import { Theme } from '../theme';

interface AllThemes {
  light: Theme;
  grey: Theme;
  medium: Theme;
  dark: Theme;
}

interface ThemeProviderProps {
  theme: AllThemes;
  sheetsManager?: any;
}

export const ThemeContext = React.createContext<ThemeProviderProps>(null);

const ThemeProvider: React.SFC<ThemeProviderProps> = ({
  theme,
  sheetsManager,
  children,
}) => (
  <ThemeContext.Provider value={{ theme, sheetsManager }}>
    {children}
  </ThemeContext.Provider>
);

export default ThemeProvider;
