import * as React from 'react';
import withStyles, {
  createStyles,
  WithStyles,
} from '../../../../core/withStyles';
import createTheme from '../../../../theme/createTheme';
import OAuthInput, { OAuthInputProps } from '../OAuthInput';

interface GoogleAuthInputProps
  extends OAuthInputProps,
    WithStyles<typeof styles> {}

const styles = createStyles({
  icon: {
    position: 'absolute',
    top: 0,
    left: 6,
    bottom: 0,
    height: '100%',
    width: 26,
    display: 'flex',
    alignItems: 'center',
    backgroundImage:
      'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDggNDgiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNNDQuNSAyMEgyNHY4LjVoMTEuOEMzNC43IDMzLjkgMzAuMSAzNyAyNCAzN2MtNy4yIDAtMTMtNS44LTEzLTEzczUuOC0xMyAxMy0xM2MzLjEgMCA1LjkgMS4xIDguMSAyLjlsNi40LTYuNEMzNC42IDQuMSAyOS42IDIgMjQgMiAxMS44IDIgMiAxMS44IDIgMjRzOS44IDIyIDIyIDIyYzExIDAgMjEtOCAyMS0yMiAwLTEuMy0uMi0yLjctLjUtNHoiLz48L2RlZnM+PGNsaXBQYXRoIGlkPSJiIj48dXNlIHhsaW5rOmhyZWY9IiNhIiBvdmVyZmxvdz0idmlzaWJsZSIvPjwvY2xpcFBhdGg+PHBhdGggY2xpcC1wYXRoPSJ1cmwoI2IpIiBmaWxsPSIjRkJCQzA1IiBkPSJNMCAzN1YxMWwxNyAxM3oiLz48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiNFQTQzMzUiIGQ9Ik0wIDExbDE3IDEzIDctNi4xTDQ4IDE0VjBIMHoiLz48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiMzNEE4NTMiIGQ9Ik0wIDM3bDMwLTIzIDcuOSAxTDQ4IDB2NDhIMHoiLz48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiM0Mjg1RjQiIGQ9Ik00OCA0OEwxNyAyNGwtNC0zIDM1LTEweiIvPjwvc3ZnPg==)',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
});

const GoogleAuthInput: React.SFC<GoogleAuthInputProps> = ({
  classes,
  ...props
}) => (
  <OAuthInput
    {...props}
    theme={outerTheme =>
      createTheme({
        ...outerTheme,
        palette: {
          ...outerTheme.palette,
          primary: {
            main: '#FFFFFF',
            dark: '#F2F2F2',
            contrastText: '#757575',
          },
        },
        button: {
          ...outerTheme.button,
          background: '#F9FAFB',
        },
      })
    }
    label="connect to Google"
    icon={<div className={classes.icon} />}
  />
);

export default withStyles(styles)(GoogleAuthInput);
