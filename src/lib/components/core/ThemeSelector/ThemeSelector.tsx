import { MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import { ThemeContext } from '../ThemeProvider';

export type ThemeType = 'light' | 'grey' | 'dark';

export interface ThemeProps {
  color?: ThemeType;
}

const ThemeSelector: React.SFC<ThemeProps> = ({ color, children }) => {
  // If color isn't provided, render children without selecting a theme.
  // This allows components to inherit the parent theme when not set.
  if (!color) return <>{children}</>;

  return (
    <ThemeContext.Consumer>
      {theme => (
        <MuiThemeProvider theme={theme[color]}>{children}</MuiThemeProvider>
      )}
    </ThemeContext.Consumer>
  );
};

export default ThemeSelector;
