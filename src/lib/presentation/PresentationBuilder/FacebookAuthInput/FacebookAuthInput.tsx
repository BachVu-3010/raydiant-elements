import { MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import Button from '../../../core/Button';
import Icon from '../../../core/Icon';
import withStyles, { createStyles, WithStyles } from '../../../core/withStyles';
import createTheme from '../../../theme/createTheme';
import OAuthInput, { OAuthInputProps } from '../OAuthInput';

interface FacebookAuthInputProps
  extends OAuthInputProps,
    WithStyles<typeof styles> {}

const styles = createStyles({
  icon: {
    position: 'absolute',
    top: 0,
    left: 6,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    '& > svg': {
      height: 26,
      width: 26,
    },
  },
});

const FacebookAuthInput: React.SFC<FacebookAuthInputProps> = ({
  classes,
  ...props
}) => (
  <MuiThemeProvider
    theme={outerTheme =>
      createTheme({
        ...outerTheme,
        palette: {
          ...outerTheme.palette,
          primary: {
            main: '#4267B2',
            dark: '#3a5b9c',
            contrastText: '#ffffff',
          },
        },
      })
    }
  >
    <OAuthInput {...props}>
      {({ onClick }) => (
        <Button fullWidth color="primary" onClick={onClick}>
          <div className={classes.icon}>
            <Icon icon="facebook" />
          </div>
          Log In with Facebook
        </Button>
      )}
    </OAuthInput>
  </MuiThemeProvider>
);

export default withStyles(styles)(FacebookAuthInput);
