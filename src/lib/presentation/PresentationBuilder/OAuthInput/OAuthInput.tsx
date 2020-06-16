import { ThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import Button from '../../../core/Button';
import Link from '../../../core/Link';
import withStyles, { createStyles, WithStyles } from '../../../core/withStyles';
import FormHelperText from '../../../internal/FormHelperText';
import createTheme, { Theme } from '../../../theme/createTheme';
import * as T from '../../PresentationTypes';

export interface OAuthInputProps {
  label: string;
  value: string;
  helperText: React.ReactNode;
  theme?: (outerTheme: Theme) => Theme,
  path: T.Path;
  error?: boolean;
  disabled?: boolean;
  authUrl: string;
  verifyUrl: string;
  verifyQsParam: string;
  logoutUrl?: string;
  logoutQsParam?: string;
  onChange: (value: string) => any;
  icon?: React.ReactNode;
  /** Preview username for styleguidist */
  previewUsername?: string;
}

interface OAuthInputState {
  username: string;
  verifyFailed: boolean;
}

const styles = createStyles({
  default: {
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
  },
  disabled: {
    borderColor: '#E3E3E2',
  },
  loggedIn: {
    borderColor: '#E3E3E2',
  },
  label: {
    width: '100%',
    padding: '0 30px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
});

class OAuthInput extends React.Component<OAuthInputProps & WithStyles<typeof styles>, OAuthInputState> {
  static defaultProps = {
    theme: (outerTheme: Theme) => createTheme({
      ...outerTheme,
      palette: {
        ...outerTheme.palette,
        primary: {
          main: '#003670',
          dark: '#002B5A',
          contrastText: '#ffffff',
        },
      },
      button: {
        ...outerTheme.button,
        background: '#7A93B2',
        foregroundMuted: '#ffffff',
      },
    })
  };

  state = {
    username: '',
    verifyFailed: false,
  };

  componentDidMount() {
    const { value } = this.props;

    if (value) {
      this.verify(value);
    }
  }

  componentDidUpdate(prevProps: OAuthInputProps) {
    const { value } = this.props;

    if (value && value !== prevProps.value) {
      this.verify(value);
    }
  }

  authRedirect = () => {
    const { authUrl } = this.props;
    // encodeURIComponent doesn't account for hash param.
    const currentUrl = encodeURIComponent(window.location.href).replace(
      /#/g,
      '%23',
    );
    const redirectUrl = `${authUrl}?prop=${this.serializePropPath()}&dash-uri=${currentUrl}`;
    window.location.href = redirectUrl;
  };

  logout = () => {
    const { value, logoutUrl, logoutQsParam, onChange } = this.props;

    this.setState({ username: null });
    onChange(null);

    if (logoutUrl) {
      // We don't care about the response.
      fetch(`${logoutUrl}?${logoutQsParam}=${value}`, {
        method: 'POST',
        mode: 'no-cors',
      });
    }
  };

  async verify(accessToken: string) {
    const { verifyUrl, verifyQsParam, previewUsername } = this.props;

    if (previewUsername) {
      this.setState(({ username: previewUsername, verifyFailed: false }));
      return;
    }

    const res = await fetch(`${verifyUrl}?${verifyQsParam}=${accessToken}`);
    if (res.ok) {
      const { username } = await res.json();
      this.setState({ username, verifyFailed: false });
    } else {
      this.setState({ verifyFailed: true });
    }
  }

  serializePropPath() {
    // Prop paths are an array, we need to serialize them to pass it through the auth redirects.
    return this.props.path.join('.');
  }

  getHelperContent = () => {
    const { disabled, helperText } = this.props;
    const { username, verifyFailed } = this.state;

    if (username) {
      return <Link onClick={this.logout} disabled={disabled}>Log out</Link>;
    } else if (verifyFailed) {
      return 'account not connected, please try again.';
    }

    return helperText;
  };

  render() {
    const { classes, error, disabled, icon, label, theme } = this.props;
    const { username, verifyFailed } = this.state;
    const hasError = error || verifyFailed;
    const loggedIn = !!username;
    const buttonLabel = loggedIn ? `logged in as ${username}` : label;
    const helperContent = this.getHelperContent();

    return (
      <ThemeProvider<Theme> theme={theme}>
        <div>
          <Button
            fullWidth
            color={loggedIn && !disabled ? 'default' : 'primary'}
            onClick={loggedIn ? null : this.authRedirect}
            disabled={disabled || loggedIn}
            classes={{ button: disabled ? classes.disabled : (loggedIn ? classes.loggedIn : classes.default) }}
          >
            <span className={classes.label}>{buttonLabel}</span>
            {icon}
          </Button>
          {helperContent && <FormHelperText error={hasError} disabled={disabled}>{helperContent}</FormHelperText>}
        </div>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(OAuthInput);
