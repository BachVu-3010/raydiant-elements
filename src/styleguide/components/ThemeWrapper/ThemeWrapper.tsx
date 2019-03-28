import * as React from 'react';
import SelectField from '../../../lib/core/SelectField';
import ThemeProvider from '../../../lib/core/ThemeProvider';
import ThemeSelector, { ThemeType } from '../../../lib/core/ThemeSelector';
import withStyles, { WithStyles } from '../../../lib/core/withStyles';
import theme from '../../../lib/theme';
import PreviewWrapper from '../PreviewWrapper';
import styles from './ThemeWrapper.styles';

// For easy inspecting from the console.
(window as any).theme = theme;

interface ThemeWrapperProps extends WithStyles<typeof styles> {}
interface ThemeWrapperState {
  selectedTheme: string;
}

class ThemeWrapper extends React.Component<
  ThemeWrapperProps,
  ThemeWrapperState
> {
  state = {
    selectedTheme: 'light',
  };

  render() {
    const { children, classes } = this.props;
    const { selectedTheme } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <ThemeSelector color={selectedTheme as ThemeType}>
          <PreviewWrapper>
            <div className={classes.preview}>
              <div className={classes.content}>{children}</div>
            </div>
            <div className={classes.actions}>
              <SelectField
                label="Theme"
                value={selectedTheme}
                onChange={value => {
                  this.setState({ selectedTheme: value });
                }}
              >
                <option value="light">Light</option>
                <option value="grey">Grey</option>
                <option value="dark">Dark</option>
              </SelectField>
            </div>
          </PreviewWrapper>
        </ThemeSelector>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(ThemeWrapper);
