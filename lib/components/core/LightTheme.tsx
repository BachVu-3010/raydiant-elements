import { MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import ThemeBackground from '../internal/ThemeBackground';
import { ThemeContext } from './ThemeProvider';

interface LightTheme {
  className?: string;
}

const Light: React.SFC<LightTheme> = ({ className, children }) => (
  <ThemeContext.Consumer>
    {theme => (
      <MuiThemeProvider theme={theme.light}>
        <ThemeBackground className={className}>{children}</ThemeBackground>
      </MuiThemeProvider>
    )}
  </ThemeContext.Consumer>
);

export default Light;
