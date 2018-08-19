import { MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import ThemeBackground from '../internal/ThemeBackground';
import { ThemeContext } from './ThemeProvider';

interface DarkThemeProps {
  className?: string;
}

const DarkTheme: React.SFC<DarkThemeProps> = ({ className, children }) => (
  <ThemeContext.Consumer>
    {theme => (
      <MuiThemeProvider theme={theme.dark}>
        <ThemeBackground className={className}>{children}</ThemeBackground>
      </MuiThemeProvider>
    )}
  </ThemeContext.Consumer>
);

export default DarkTheme;
