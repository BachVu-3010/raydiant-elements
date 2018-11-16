import * as React from 'react';
import Button from '../../../core/Button';
import FormHelperText from '../../../internal/FormHelperText';
import * as T from '../../PresentationTypes';

interface OAuthInputProps {
  label: string;
  value: string;
  helperText: React.ReactNode;
  path: T.Path;
  error?: boolean;
  authUrl: string;
  verifyUrl: string;
  verifyQsParam: string;
  onChange: (value: string) => any;
}

interface OAuthInputState {
  username: string;
  verifyFailed: boolean;
}

class OAuthInput extends React.Component<OAuthInputProps, OAuthInputState> {
  state = {
    username: '',
    verifyFailed: false,
  };

  componentDidMount() {
    const { value, onChange } = this.props;
    // Get the window hash without the leading '#'.
    const hash = window.location.hash.substr(1);
    // Parse hash params by splitting on & (or #) and then =.
    //   ie. #param1=1&param2=2 => [[param1, 1], [param2, 2]]
    const hashParams = hash.split(/[&#]/).map(paramStr => paramStr.split('='));
    // Find the hash param for the current prop path.
    const propHashParam = hashParams.filter(
      paramArr => paramArr[0] === this.serializePropPath(),
    )[0];

    if (propHashParam) {
      // The value (accessToken) to store is the second parameter in the array.
      //  ie. #propPath=token
      const newValue = propHashParam[1];
      // Remove auth param from hash.
      const newHashParams = hashParams
        .filter(arr => arr !== propHashParam)
        .map(arr => arr.join('='))
        .join('&');

      window.location.hash = `#${newHashParams}`;

      // Verify accessToken and save
      this.verify(newValue);
      onChange(newValue);
    } else if (value) {
      // Verify accessToken
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

  async verify(accessToken: string) {
    const { verifyUrl, verifyQsParam } = this.props;
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

  render() {
    const { label, helperText, error } = this.props;
    const { username, verifyFailed } = this.state;
    const hasError = error || verifyFailed;
    let message = helperText;

    if (username) {
      message = `Connected to ${username}`;
    } else if (verifyFailed) {
      message = 'Account not connected, please try again”';
    }

    return (
      <div>
        <Button
          fullWidth
          label={label}
          color="primary"
          onClick={this.authRedirect}
        />
        {message && <FormHelperText error={hasError}>{message}</FormHelperText>}
      </div>
    );
  }
}

export default OAuthInput;
