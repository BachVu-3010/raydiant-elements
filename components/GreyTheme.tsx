import { MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import ThemeBackground from './ThemeBackground';
import { ThemeContext } from './ThemeProvider';

interface GreyProps {
  className?: string;
}

const Grey: React.SFC<GreyProps> = ({ className, children }) => (
  <ThemeContext.Consumer>
    {theme => (
      <MuiThemeProvider theme={theme.grey}>
        <ThemeBackground className={className}>{children}</ThemeBackground>
      </MuiThemeProvider>
    )}
  </ThemeContext.Consumer>
);

export default Grey;
