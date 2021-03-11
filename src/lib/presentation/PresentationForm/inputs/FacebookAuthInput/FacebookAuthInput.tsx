import * as React from 'react';
import Icon from '../../../../core/Icon';
import withStyles, {
  createStyles,
  WithStyles,
} from '../../../../core/withStyles';
import createTheme from '../../../../theme/createTheme';
import OAuthInput, { OAuthInputProps } from '../OAuthInput';

interface FacebookAuthInputProps
  extends OAuthInputProps,
    WithStyles<typeof styles> {}

const styles = createStyles({
  icon: {
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    '& > svg': {
      height: 24,
      width: 24,
    },
  },
});

const FacebookAuthInput: React.SFC<FacebookAuthInputProps> = ({
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
            main: '#4267B2',
            dark: '#35528E',
            contrastText: '#ffffff',
          },
        },
        button: {
          ...outerTheme.button,
          background: '#9BAED4',
          foregroundMuted: '#ffffff',
        },
      })
    }
    label="Connect to Facebook"
    icon={
      <div className={classes.icon}>
        <Icon icon="facebook" />
      </div>
    }
  />
);

export default withStyles(styles)(FacebookAuthInput);
