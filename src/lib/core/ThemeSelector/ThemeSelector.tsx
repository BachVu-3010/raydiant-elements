import { ThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import { ThemeContext } from '../ThemeProvider';

export type ThemeType = 'light' | 'lightGrey' | 'grey' | 'dark';

export interface ThemeProps {
  color?: ThemeType;
}

export const ThemeSelector: React.SFC<ThemeProps> = ({ color, children }) => {
  // If color isn't provided, render children without selecting a theme.
  // This allows components to inherit the parent theme when not set.
  if (!color) return <>{children}</>;

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <ThemeProvider theme={theme[color]}>{children}</ThemeProvider>
      )}
    </ThemeContext.Consumer>
  );
};

export default ThemeSelector;
