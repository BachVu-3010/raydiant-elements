import { ThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import Button from '../../../core/Button';
import withStyles, { createStyles, WithStyles } from '../../../core/withStyles';
import createTheme, { Theme } from '../../../theme/createTheme';
import OAuthInput, { OAuthInputProps } from '../OAuthInput';

interface OneDriveAuthInputProps
  extends OAuthInputProps,
    WithStyles<typeof styles> {}

const styles = createStyles({
  icon: {
    position: 'absolute',
    top: 0,
    left: 6,
    bottom: 0,
    height: '100%',
    width: 36,
    display: 'flex',
    alignItems: 'center',
    backgroundImage:
      'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAzNyAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjY5MjUgNi4xMTAyNVY2LjEwOTE3TDIxLjkwMTcgMTAuNDI3NEwyNi4xOTc0IDguNjE5MjFDMjcuMDcwNSA4LjI0MjA2IDI4LjAxMTggOC4wNDgxMiAyOC45NjI5IDguMDQ5MzhDMjkuMTIxNyA4LjA0OTM4IDI5LjI3ODQgOC4wNTY4OSAyOS40MzQgOC4wNjY1NUMyOC45MTc3IDYuMDUyNTcgMjcuODI3NSA0LjIzMTkyIDI2LjI5NTkgMi44MjU5MUMyNC43NjQzIDEuNDE5OSAyMi44NTczIDAuNDg5MDg4IDIwLjgwNjYgMC4xNDY2MDNDMTguNzU1OSAtMC4xOTU4ODEgMTYuNjQ5OCAwLjA2NDcxNzIgMTQuNzQ0NSAwLjg5NjcyMUMxMi44MzkxIDEuNzI4NzMgMTEuMjE2NCAzLjA5NjMxIDEwLjA3MzcgNC44MzMyM0wxMC4xODMyIDQuODMwMDFDMTEuNzc2MyA0LjgyNzkyIDEzLjMzODIgNS4yNzEzNyAxNC42OTI1IDYuMTEwMjVWNi4xMTAyNVoiIGZpbGw9IiMwMzY0QjgiLz4KPHBhdGggZD0iTTE0LjY5MzggNi4xMDkxM0MxMy4zMzkxIDUuMjcwNDQgMTEuNzc2OCA0LjgyNzM2IDEwLjE4MzUgNC44Mjk5N0wxMC4wNzQgNC44MzMxOUM4LjUxNDggNC44NTI2OSA2Ljk5MDM0IDUuMjk2NjcgNS42NjQ0NSA2LjExNzQzQzQuMzM4NTYgNi45MzgxOSAzLjI2MTM2IDguMTA0NyAyLjU0ODU5IDkuNDkxNjNDMS44MzU4MiAxMC44Nzg2IDEuNTE0NDEgMTIuNDMzNSAxLjYxODkgMTMuOTg5NEMxLjcyMzM5IDE1LjU0NTIgMi4yNDk4MyAxNy4wNDMyIDMuMTQxNjYgMTguMzIyNEw5LjQ5NjcxIDE1LjY0NzFMMTIuMzIzMyAxNC40NThMMTguNjE1IDExLjgwOTZMMjEuOTAxIDEwLjQyNzRMMTQuNjkzOCA2LjEwOTEzWiIgZmlsbD0iIzAwNzhENCIvPgo8cGF0aCBkPSJNMjkuNDM0MSA4LjA2NjU1QzI5LjI3NzMgOC4wNTU1OCAyOS4xMjAyIDguMDQ5ODYgMjguOTYzIDguMDQ5MzhDMjguMDEyMiA4LjA0ODYgMjcuMDcxNCA4LjI0MjkxIDI2LjE5ODYgOC42MjAyOEwyMS45MDE5IDEwLjQyNzRMMjMuMTQ3OCAxMS4xNzMyTDI3LjIzMSAxMy42MTg5TDI5LjAxMjQgMTQuNjg1NkwzNS4xMDQ1IDE4LjMzNDJDMzUuNjU4MSAxNy4zMDY3IDM1Ljk0NDkgMTYuMTU2NyAzNS45Mzg4IDE0Ljk4OTZDMzUuOTMyNyAxMy44MjI1IDM1LjYzMzkgMTIuNjc1NSAzNS4wNjk3IDExLjY1MzlDMzQuNTA1NCAxMC42MzIyIDMzLjY5MzkgOS43Njg0MSAzMi43MDkzIDkuMTQxNjdDMzEuNzI0NyA4LjUxNDk0IDMwLjU5ODYgOC4xNDUyOCAyOS40MzQxIDguMDY2NTVWOC4wNjY1NVoiIGZpbGw9IiMxNDkwREYiLz4KPHBhdGggZD0iTTI5LjAxMjIgMTQuNjg1NkwyNy4yMzA4IDEzLjYxODlMMjMuMTQ3NiAxMS4xNzIyTDIxLjkwMjcgMTAuNDI3NEwxOC42MTU4IDExLjgwOTZMMTIuMzI0IDE0LjQ1ODFMOS40OTYzNSAxNS42NDcxTDMuMTM5MTYgMTguMzIyNEMzLjkyOTMzIDE5LjQ1ODQgNC45ODI3MiAyMC4zODYyIDYuMjA5MzUgMjEuMDI2NkM3LjQzNTk4IDIxLjY2NyA4Ljc5OTQgMjIuMDAxIDEwLjE4MzEgMjJIMjguOTYyOEMzMC4yMjIxIDIyLjAwMDUgMzEuNDU4IDIxLjY1OTkgMzIuNTM5NCAyMS4wMTQ1QzMzLjYyMDcgMjAuMzY5MSAzNC41MDcgMTkuNDQyOSAzNS4xMDQzIDE4LjMzNDJMMjkuMDEyMiAxNC42ODU2WiIgZmlsbD0iIzI4QThFQSIvPgo8L3N2Zz4K)',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
});

const OneDriveAuthInput: React.SFC<OneDriveAuthInputProps> = ({
  classes,
  ...props
}) => (
  <ThemeProvider<Theme>
    theme={outerTheme =>
      createTheme({
        ...outerTheme,
        palette: {
          ...outerTheme.palette,
          primary: {
            main: '#ffffff',
            dark: '#f2f2f2',
            contrastText: '#757575',
          },
        },
      })
    }
  >
    <OAuthInput {...props}>
      {({ onClick }) => (
        <Button fullWidth color="primary" onClick={onClick}>
          <div className={classes.icon} />
          connect to OneDrive
        </Button>
      )}
    </OAuthInput>
  </ThemeProvider>
);

export default withStyles(styles)(OneDriveAuthInput);
