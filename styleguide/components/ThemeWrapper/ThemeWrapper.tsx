import * as React from 'react';
import SelectField from '../../../lib/components/core/SelectField';
import Theme, { ThemeType } from '../../../lib/components/core/Theme';
import ThemeProvider from '../../../lib/components/core/ThemeProvider';
import withStyles, {
  WithStyles,
} from '../../../lib/components/core/withStyles';
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
        <Theme type={selectedTheme as ThemeType}>
          <PreviewWrapper>
            <div className={classes.preview}>{children}</div>
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
        </Theme>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(ThemeWrapper);
